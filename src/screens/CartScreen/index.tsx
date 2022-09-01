import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import CachedImage from '../../components/CachedImage';
import {CancelIcon, MinusIcon, PlusIcon} from '../../components/Icons';
import Typography from '../../components/Typography';
import {cedi, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {useSelectState} from '../../store/selectors';
import {cartActions} from '../../store/slices/cart.slice';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: normalizeY(18),
    borderBottomWidth: 1,
    paddingBottom: normalizeY(16),
    borderColor: colors.lightergrey,
  },
  productImage: {
    width: screenwidth * 0.3,
    height: screenwidth * 0.3 * 1.2,
    borderRadius: normalizeY(12),
    marginRight: normalizeX(14),
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: normalizeY(38),
    height: normalizeY(38),
    borderRadius: normalizeY(38 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.deepgrey,
  },
  summary: {
    width: '100%',
    paddingVertical: normalizeY(12),
    // height: normalizeY(200),
    // backgroundColor: colors.error,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'CartScreen'> {}

const CartScreen = (props: Props) => {
  const {bottom, top} = useSafeAreaInsets();
  const {cart} = useSelectState();
  const dispatch = useDispatch();
  const scrollY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    console.log({d: cart.discountPercentage});
  }, []);

  const summary = React.useMemo(() => {
    const data = [
      {label: 'Subtotal', value: `${cedi} ${cart.subtotal.toFixed(2)}`},
    ];

    if (cart.discountPercentage > 0) {
      data.push({
        label: 'Discount %',
        value: `${cart.discountPercentage * 100} %`,
      });
      data.push({
        label: 'Discount',
        value: `${cedi} ${cart.discount.toFixed(2)}`,
      });
    }

    return data;
  }, [cart.discount, cart.discountPercentage, cart.subtotal, cart.total]);

  return (
    <>
      <BackButton
        onPress={() => {
          if (props.navigation.canGoBack()) {
            props.navigation.goBack();
          }
        }}
      />
      <Animated.ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingTop: top + normalizeY(64),
          paddingHorizontal: normalizeX(24),
          paddingBottom: normalizeY(140),
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}>
        <Animated.View
          style={{
            ...styles.summary,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, normalizeY(200)],
                  outputRange: [0, normalizeY(150)],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          {summary.map(({label, value}, index) => (
            <View
              style={{
                ...styles.row,
                justifyContent: 'space-between',
                marginBottom: normalizeY(6),
              }}
              key={index}>
              <Typography variant="h1" color={colors.deepgrey}>
                {label}
              </Typography>
              <Typography variant="h1" color={colors.deepgrey} fontWeight={500}>
                {value}
              </Typography>
            </View>
          ))}
          <View
            style={{
              ...styles.row,
              justifyContent: 'space-between',
              marginBottom: normalizeY(6),
            }}>
            <Typography variant="h1" color={colors.deepgrey}>
              Total
            </Typography>
            <Typography variant="h1" color={colors.deepgrey} fontWeight={500}>
              {`${cedi} ${cart.total.toFixed(2)}`}
            </Typography>
          </View>
        </Animated.View>
        <View
          style={{backgroundColor: colors.white, paddingTop: normalizeY(16)}}>
          {cart.products.map(({images, name, price, id, count}, index) => (
            <View style={styles.card} key={index}>
              <CachedImage
                source={{uri: images[0]}}
                style={styles.productImage}
              />
              <View style={{flex: 1}}>
                <Typography variant="sm" color={colors.deepgrey}>
                  {name}
                </Typography>
                <Typography
                  variant="sm"
                  fontWeight={500}
                  color={colors.deepgrey}>
                  {`${cedi} ${price.toFixed(2)}`}
                </Typography>
                <View
                  style={{
                    ...styles.row,
                    marginTop: 'auto',
                    marginBottom: normalizeY(2),
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.iconButton}
                    onPress={() => {
                      dispatch(
                        cartActions.decreaseProductCount({productId: id}),
                      );
                    }}>
                    <MinusIcon
                      width={normalizeY(16)}
                      height={normalizeY(16)}
                      color={colors.deepgrey}
                      strokeWidth={3}
                    />
                  </TouchableOpacity>
                  <View style={{width: normalizeX(36)}}>
                    <Typography
                      variant="sm"
                      fontWeight={600}
                      textAlign="center">
                      {count}
                    </Typography>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.iconButton}
                    onPress={() => {
                      dispatch(
                        cartActions.increaseProductCount({productId: id}),
                      );
                    }}>
                    <PlusIcon
                      width={normalizeY(16)}
                      height={normalizeY(16)}
                      color={colors.deepgrey}
                      strokeWidth={3}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      ...styles.iconButton,
                      marginLeft: 'auto',
                      borderColor: colors.error,
                    }}
                    onPress={() => {
                      dispatch(cartActions.removeProduct({productId: id}));
                    }}>
                    <CancelIcon
                      width={normalizeY(16)}
                      height={normalizeY(16)}
                      color={colors.error}
                      strokeWidth={3}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 1)',
        ]}
        // pointerEvents="none"
        style={{
          alignItems: 'center',
          position: 'absolute',
          //   left: normalizeX(24),
          bottom: 0,
          paddingBottom: (bottom || normalizeY(12)) + normalizeY(6),
          width: '100%',
          height: normalizeY(110),
          //   backgroundColor: 'red',
          justifyContent: 'flex-end',
        }}>
        <Button label="Checkout" variant="rounded" onPress={() => {}} />
      </LinearGradient>
    </>
  );
};

export default CartScreen;
