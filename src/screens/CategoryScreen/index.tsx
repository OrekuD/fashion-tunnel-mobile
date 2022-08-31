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
import {images, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import ProductCategories from '../../namespaces/ProductCategories';
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
  const [selectedCategoryId, setSelectedCategoryId] =
    React.useState<ProductCategories.Status>(-1);

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
      <AppBar title="T-Shirt" />
      <Animated.View
        style={[
          styles.categories,
          {
            top: top + normalizeY(8) + normalizeY(26) + normalizeY(12),
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
            const isActiveCategory = index === selectedCategoryId;
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...styles.tab,
                  backgroundColor: isActiveCategory
                    ? 'rgba(41, 37, 37, 0.05)'
                    : colors.white,
                }}
                onPress={() => {
                  if (isActiveCategory) {
                    setSelectedCategoryId(-1);
                  } else {
                    setSelectedCategoryId(index);
                  }
                }}
                key={productCategory}>
                <Typography variant="sm">
                  {ProductCategories.State.text(productCategory)}
                </Typography>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
      <Animated.FlatList
        data={Array(20).fill('8')}
        numColumns={2}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(18),
          paddingTop: TAB_HEIGHT,
          paddingBottom: bottom,
        }}
        columnWrapperStyle={{width: '100%', justifyContent: 'space-between'}}
        keyExtractor={() => Math.random().toString()}
        renderItem={({item}) => (
          <ProductCard
            product={''}
            onPress={() =>
              props.navigation.navigate('ProductScreen', {productId: ''})
            }
          />
        )}
      />
    </>
  );
};

export default CategoryScreen;