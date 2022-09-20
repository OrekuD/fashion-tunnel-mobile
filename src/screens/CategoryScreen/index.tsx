import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import {FilterIcon} from '../../components/Icons';
import ProductCard from '../../components/ProductCard';
import Typography from '../../components/Typography';
import {images, isAndroid, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import ProductCategories from '../../namespaces/ProductCategories';
import {useSelectState} from '../../store/selectors';
import {normalizeX, normalizeY} from '../../utils/normalize';

const TAB_HEIGHT = 70;

const styles = StyleSheet.create({
  categories: {
    position: 'absolute',
    left: 0,
    height: TAB_HEIGHT,
    width: screenwidth,
    backgroundColor: colors.white,
    zIndex: 99,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(41, 37, 37, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: normalizeX(24),
    height: TAB_HEIGHT * 0.7,
    borderWidth: 1,
    borderColor: 'rgba(41, 37, 37, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props extends StackScreenProps<RootStackParams, 'CategoryScreen'> {}

const CategoryScreen = (props: Props) => {
  const {top, bottom} = useSafeAreaInsets();
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);
  const {products} = useSelectState();
  const [selectedCategoryId, setSelectedCategoryId] =
    React.useState<ProductCategories.Status>(props.route.params.categoryId);

  const categoryProducts = React.useMemo(() => {
    if (selectedCategoryId < 0) {
      return products.list;
    }
    return products.list.filter(
      ({productCategory}) => productCategory === selectedCategoryId,
    );
  }, [products.list, selectedCategoryId]);

  const categoriesStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateY.value, [0, TAB_HEIGHT], [1, 0]),
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 250,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -TAB_HEIGHT;
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: e => {
      isScrolling.value = true;
    },
    onEndDrag: e => {
      isScrolling.value = false;
    },
  });

  return (
    <>
      <AppBar
        title={
          selectedCategoryId < 0
            ? 'All products'
            : ProductCategories.State.text(selectedCategoryId)
        }
        subTitle={
          categoryProducts.length === 1
            ? '1 item'
            : `${categoryProducts.length} items`
        }
      />
      <Animated.View
        style={[
          styles.categories,
          {
            top: top + (isAndroid ? normalizeY(64) : normalizeY(48)),
          },
          categoriesStyle,
        ]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.tab,
            marginLeft: normalizeX(24),
            marginRight: normalizeX(12),
            paddingHorizontal: 0,
            width: TAB_HEIGHT * 0.7,
          }}>
          <FilterIcon
            width={normalizeY(24)}
            height={normalizeY(24)}
            color={colors.deepgrey}
          />
        </TouchableOpacity>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingRight: normalizeX(24),
          }}>
          {ProductCategories.State.list().map((productCategory, index) => {
            const isActiveCategory = selectedCategoryId === productCategory;
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...styles.tab,
                  backgroundColor: isActiveCategory
                    ? 'rgba(41, 37, 37, 0.05)'
                    : colors.white,
                }}
                onPress={() =>
                  setSelectedCategoryId(isActiveCategory ? -1 : productCategory)
                }
                key={index}>
                <Typography variant="sm" color={colors.deepgrey}>
                  {ProductCategories.State.text(productCategory)}
                </Typography>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
      <Animated.FlatList
        data={categoryProducts}
        numColumns={2}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        ListEmptyComponent={
          <View
            style={{
              paddingTop: normalizeY(120),
            }}>
            <Typography variant="sm" color={colors.deepgrey} textAlign="center">
              No products for this category
            </Typography>
          </View>
        }
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(18),
          paddingTop: TAB_HEIGHT + normalizeY(12),
          paddingBottom: bottom,
        }}
        columnWrapperStyle={{width: '100%', justifyContent: 'space-between'}}
        keyExtractor={() => Math.random().toString()}
        renderItem={({item}) => (
          <ProductCard
            product={item}
            onPress={() =>
              props.navigation.navigate('ProductScreen', {productId: item.id})
            }
          />
        )}
      />
    </>
  );
};

export default CategoryScreen;
