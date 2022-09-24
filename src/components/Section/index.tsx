import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../../types';
import {images, cedi, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import Product from '../../models/Product';
import formatAmount from '../../utils/formatAmount';
import {normalizeX, normalizeY} from '../../utils/normalize';
import CachedImage from '../CachedImage';
import Typography from '../Typography';

const styles = StyleSheet.create({});

interface Props {
  sectionTitle: string;
  sectionDescription: string;
  products: Array<Product>;
  navigation: StackNavigationProp<RootStackParams>;
}

const Section = (props: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const itemWidth = React.useMemo(() => screenwidth * 0.55, []);

  return (
    <View style={{marginBottom: normalizeY(24)}}>
      <Typography
        variant="h2"
        color={colors.deepgrey}
        style={{marginLeft: normalizeX(24), marginVertical: normalizeY(8)}}>
        {props.sectionTitle}
      </Typography>
      <Animated.ScrollView
        snapToAlignment="center"
        snapToInterval={itemWidth + normalizeX(24)}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(24),
          paddingTop: normalizeY(12),
        }}
        decelerationRate="fast"
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}>
        {props.products.map((product, index) => {
          return (
            <Animated.View
              style={{
                width: itemWidth,
                marginRight: normalizeX(18),
              }}
              key={index}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: '100%',
                }}
                onPress={() =>
                  props.navigation.navigate('ProductScreen', {
                    productId: product.id,
                  })
                }>
                <View
                  style={{
                    width: itemWidth,
                    height: itemWidth * 1.25,
                    backgroundColor: colors.lightgrey,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CachedImage
                    source={{uri: product.images[0]}}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="cover"
                  />
                </View>
                <Typography
                  variant="sm"
                  fontWeight={500}
                  style={{marginTop: normalizeY(14)}}
                  color={colors.deepgrey}>
                  {product.name}
                </Typography>
                <Typography
                  variant="sm"
                  numberOfLines={2}
                  style={{marginTop: normalizeY(8)}}
                  color={colors.deepgrey}>
                  {product.description}
                </Typography>
                <Typography
                  variant="sm"
                  fontWeight={500}
                  style={{marginTop: normalizeY(14)}}
                  color={colors.deepgrey}>
                  {`${cedi} ${formatAmount(product.price)}`}
                </Typography>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default Section;
