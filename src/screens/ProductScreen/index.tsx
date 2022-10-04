import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import CachedImage from '../../components/CachedImage';
import {
  ArrowRightIcon,
  BagIcon,
  ChevronRightIcon,
  HeartFilledIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from '../../components/Icons';
import SignInRequiredBottomSheet from '../../components/SignInRequiredBottomSheet';
import Typography from '../../components/Typography';
import {cedi, isAndroid, screenheight, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import Product from '../../models/Product';
import ClothSizes from '../../namespaces/ClothSizes';
import favouritesAsyncActions from '../../store/actions/favourites.action';
import productsAsyncActions from '../../store/actions/products.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import {cartActions} from '../../store/slices/cart.slice';
import {favouritesActions} from '../../store/slices/favourites.slice';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalizeX(16),
    zIndex: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
  },
  footerContent: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalizeX(24),
    backgroundColor: colors.white,
  },
  cartButton: {
    position: 'absolute',
    right: normalizeX(24),
    width: normalizeY(60),
    height: normalizeY(60),
    borderRadius: normalizeY(60 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.deepgrey,
    zIndex: 20,
  },
  image: {
    width: screenwidth,
    height: screenheight * 0.6,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    bottom: normalizeY(24),
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  dot: {
    width: normalizeY(8),
    height: normalizeY(8),
    borderRadius: normalizeY(8),
    backgroundColor: colors.deepgrey,
    marginHorizontal: normalizeX(6),
  },
  backButton: {
    width: normalizeY(36),
    height: normalizeY(36),
    borderRadius: normalizeY(36 / 2),
    backgroundColor: colors.deepgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizes: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  size: {
    width: (screenwidth - normalizeX(48)) / 6,
    height: (screenwidth - normalizeX(48)) / 6,
    borderRadius: normalizeY(42),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.2,
    borderColor: 'rgba(41, 37, 37, 0.2)',
    marginRight: normalizeY(10),
    marginBottom: normalizeY(10),
  },
  sizeGuide: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalizeY(14),
    paddingVertical: normalizeY(14),
  },
  section: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(41, 37, 37, 0.1)',
    paddingBottom: normalizeY(14),
  },
});

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

const ProductScreen = (props: Props) => {
  const {top, bottom} = useSafeAreaInsets();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [selectedSize, setSelectedSize] = React.useState<ClothSizes.Status>(-1);
  const [activeSectionIndexes, setActiveSectionIndexes] = React.useState<
    Array<number>
  >([0, 1]);
  const {products, favourites, request, cart, authentication} =
    useSelectState();
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState<Product>();
  const [updatedAt] = React.useState(request.updatedAt);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showBottomSheet, setShowBottomSheet] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const isItemInCart = React.useMemo(
    () =>
      cart.products.findIndex(({id}) => id === props.route.params.productId) >=
      0,
    [cart.products, props.route.params.productId],
  );

  const isItemInFavourites = React.useMemo(
    () =>
      favourites.list.findIndex(
        ({id}) => id === props.route.params.productId,
      ) >= 0,
    [favourites.list, props.route.params.productId],
  );

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(productsAsyncActions.getProduct.typePrefix)) {
      RM.consume(productsAsyncActions.getProduct.typePrefix);
      setIsLoading(false);
      return;
    }

    if (RM.isRejected(productsAsyncActions.getProduct.typePrefix)) {
      RM.consume(productsAsyncActions.getProduct.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  React.useEffect(() => {
    if (!props.route.params.productId) return;
    const _product = products.list.find(
      ({id}) => id === props.route.params.productId,
    );
    if (!_product) {
      dispatch(productsAsyncActions.getProduct(props.route.params.productId));
      return;
    }
    setProduct(_product);
    setIsLoading(false);
  }, [products.list, props.route.params.productId]);

  const animate = (index: number) => {
    const inputRange = [
      (index - 1) * screenwidth,
      index * screenwidth,
      (index + 1) * screenwidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });
    return {opacity};
  };

  const sections = [
    {
      name: 'SIZES',
      component: (
        <>
          <View style={styles.sizes}>
            {ClothSizes.State.list().map((size, index) => {
              const isSelected = index === selectedSize;
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSelectedSize(isSelected ? -1 : size)}
                  style={{
                    ...styles.size,
                    // marginRight: index === 4 ? 0 : normalizeX(3),
                    borderColor: isSelected
                      ? colors.deepgrey
                      : 'rgba(41, 37, 37, 0.2)',
                  }}
                  key={size}>
                  <Typography
                    variant="sm"
                    textAlign="center"
                    color={colors.black}>
                    {ClothSizes.State.text(size)}
                  </Typography>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.sizeGuide}
            onPress={() =>
              props.navigation.navigate('SizeGuideScreen', {
                productId: product?.id || '',
              })
            }>
            <Typography variant="sm">View size guide</Typography>
            <ChevronRightIcon
              width={normalizeY(18)}
              height={normalizeY(18)}
              color={colors.deepgrey}
            />
          </TouchableOpacity>
        </>
      ),
    },
    {
      name: 'QUANTITY',
      component: (
        <>
          <View style={styles.sizes}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setQuantity(prevValue =>
                  prevValue === 1 ? prevValue : prevValue - 1,
                );
                if (isItemInCart && props.route.params.productId) {
                  dispatch(
                    cartActions.decreaseProductCount({
                      productId: props.route.params.productId,
                    }),
                  );
                }
              }}
              style={{
                ...styles.size,
                // marginRight: index === 4 ? 0 : normalizeX(3),
                borderColor:
                  quantity === 1 ? 'rgba(41, 37, 37, 0.2)' : colors.deepgrey,
                marginRight: 0,
              }}>
              <MinusIcon
                width={normalizeY(16)}
                height={normalizeY(16)}
                color={colors.deepgrey}
              />
            </TouchableOpacity>
            <View style={{width: normalizeX(46)}}>
              <Typography
                variant="h1"
                color={colors.deepgrey}
                textAlign="center">
                {quantity}
              </Typography>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setQuantity(prevValue => prevValue + 1);
                if (isItemInCart && props.route.params.productId) {
                  dispatch(
                    cartActions.increaseProductCount({
                      productId: props.route.params.productId,
                    }),
                  );
                }
              }}
              // onPress={() => setSelectedSize(isSelected ? -1 : size)}
              style={{
                ...styles.size,
                // marginRight: index === 4 ? 0 : normalizeX(3),
                borderColor: colors.deepgrey,
                marginLeft: 0,
              }}>
              <PlusIcon
                width={normalizeY(16)}
                height={normalizeY(16)}
                color={colors.deepgrey}
              />
            </TouchableOpacity>
          </View>
        </>
      ),
    },
    {
      name: 'DESCRIPTION',
      component: (
        <>
          <Typography variant="sm" color={colors.deepgrey}>
            {product?.description || ''}
          </Typography>
        </>
      ),
    },
  ];

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
        }}>
        <ActivityIndicator size="small" color={colors.deepgrey} />
      </View>
    );

  if (!product)
    return (
      <>
        <AppBar title="Product" />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
            paddingBottom: normalizeY(140),
          }}>
          <Typography variant="sm" color={colors.deepgrey} textAlign="center">
            Product not found
          </Typography>
        </View>
      </>
    );

  return (
    <>
      <SignInRequiredBottomSheet
        isVisible={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
        navigation={props.navigation}
      />
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" translucent />
        <View
          style={{
            ...styles.header,
            paddingTop: top + normalizeY(isAndroid ? 12 : 4),
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.backButton}
            onPress={props.navigation.goBack}>
            <ArrowRightIcon
              width={normalizeY(22)}
              height={normalizeY(22)}
              color={colors.white}
              style={{
                transform: [{rotate: '180deg'}],
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.backButton}
            onPress={() => {
              if (!authentication.isAuthenticated) {
                setShowBottomSheet(true);
                return;
              }
              dispatch(favouritesActions.updateFavourites({product}));
              dispatch(favouritesAsyncActions.updateFavourites(product.id));
            }}>
            {isItemInFavourites ? (
              <HeartFilledIcon
                width={normalizeY(18)}
                height={normalizeY(18)}
                color={colors.error}
              />
            ) : (
              <HeartIcon
                width={normalizeY(18)}
                height={normalizeY(18)}
                color={colors.white}
              />
            )}
          </TouchableOpacity>
        </View>
        <Animated.ScrollView
          contentContainerStyle={{
            paddingBottom: (bottom || normalizeY(12)) + normalizeY(120),
            paddingTop: top,
          }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {
              useNativeDriver: true,
            },
          )}>
          <Animated.View
            style={{
              width: '100%',
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, screenheight * 0.6],
                    outputRange: [0, screenheight * 0.45],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Animated.ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {
                  useNativeDriver: true,
                },
              )}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}>
              {product.images.map(uri => (
                <CachedImage key={uri} source={{uri}} style={styles.image} />
              ))}
            </Animated.ScrollView>
            <View style={styles.pagination}>
              {product.images.map((_, index) => {
                const {opacity} = animate(index);
                return (
                  <Animated.View style={{...styles.dot, opacity}} key={index} />
                );
              })}
            </View>
          </Animated.View>
          <View
            style={{
              width: '100%',
              backgroundColor: colors.white,
              // backgroundColor: 'red',
              paddingTop: normalizeY(14),
              paddingHorizontal: normalizeX(24),
            }}>
            <Typography
              variant="h3"
              color={colors.deepgrey}
              textAlign="center"
              fontWeight={600}>
              {product.name}
            </Typography>
            <Typography variant="sm" color={colors.deepgrey} textAlign="center">
              {product.description}
            </Typography>
            {sections.map(({component, name}, index) => {
              const isActive = activeSectionIndexes.includes(index);
              return (
                <View key={index} style={styles.section}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.sizeGuide}
                    onPress={() => {
                      if (isActive) {
                        setActiveSectionIndexes(prevValues =>
                          prevValues.filter(value => value !== index),
                        );
                      } else {
                        setActiveSectionIndexes([
                          ...activeSectionIndexes,
                          index,
                        ]);
                      }
                    }}>
                    <Typography variant="sm" color={colors.deepgrey}>
                      {name.toUpperCase()}
                    </Typography>
                    <ChevronRightIcon
                      width={normalizeY(18)}
                      height={normalizeY(18)}
                      color={colors.deepgrey}
                      style={{
                        transform: [{rotate: isActive ? '-90deg' : '90deg'}],
                      }}
                    />
                  </TouchableOpacity>
                  {isActive && <>{component}</>}
                </View>
              );
            })}
            {/* 
          {Array(10)
            .fill('9')
            .map((_, index) => (
              <View
                key={index}
                style={{
                  width: 200,
                  height: 200,
                  marginBottom: 20,
                  marginLeft: 34,
                  backgroundColor: colors.darkgrey,
                }}
              />
            ))} */}
          </View>
        </Animated.ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (isItemInCart) {
              dispatch(cartActions.removeProduct({productId: product.id}));
            } else {
              dispatch(
                cartActions.addProduct({
                  product: {
                    ...product,
                    count: quantity,
                    total: product.price * quantity,
                    size: selectedSize,
                  },
                }),
              );
            }
          }}
          style={{
            ...styles.cartButton,
            bottom: bottom || normalizeY(24),
            backgroundColor: isItemInCart ? colors.error : colors.deepgrey,
          }}>
          {isItemInCart ? (
            <TrashIcon
              width={normalizeY(24)}
              height={normalizeY(24)}
              color={colors.white}
            />
          ) : (
            <BagIcon
              width={normalizeY(24)}
              height={normalizeY(24)}
              color={colors.white}
            />
          )}
        </TouchableOpacity>
        <View
          style={{
            ...styles.footer,
            height: (bottom || normalizeY(12)) + normalizeY(120),
            // backgroundColor: 'red',
          }}
          pointerEvents="none">
          <LinearGradient
            style={{
              width: '100%',
              height: normalizeY(40),
            }}
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 1)',
            ]}></LinearGradient>
          <View style={styles.footerContent}>
            <Typography
              variant="h3"
              fontWeight={500}>{`${cedi} ${product.price.toFixed(
              2,
            )}`}</Typography>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductScreen;
