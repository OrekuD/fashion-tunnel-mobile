import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {cedi, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import Product from '../../models/Product';
import {normalizeX, normalizeY} from '../../utils/normalize';
import CachedImage from '../CachedImage';
import {ChevronRightIcon} from '../Icons';
import Typography from '../Typography';

const styles = StyleSheet.create({
  container: {
    width: (screenwidth - normalizeX(36)) / 2 - normalizeX(6),
    height:
      ((screenwidth - normalizeX(36)) / 2 - normalizeX(6)) * 1.25 +
      normalizeY(140),
    marginBottom: normalizeY(18),
  },
  imageContainer: {
    width: '100%',
    height: ((screenwidth - normalizeX(36)) / 2 - normalizeX(6)) * 1.25,
    resizeMode: 'contain',
  },
});

interface Props {
  product: Product;
  onPress?: () => void;
}

const ProductCard = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <CachedImage
          source={{uri: props.product.images[0]}}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <Typography
        variant="sm"
        fontWeight={500}
        style={{
          marginTop: normalizeY(10),
          height: normalizeY(50),
        }}
        color={colors.deepgrey}>
        {props.product.name}
      </Typography>
      <Typography
        variant="sm"
        numberOfLines={2}
        style={{marginTop: normalizeY(6)}}
        color={colors.deepgrey}>
        {props.product.description}
      </Typography>
      <Typography
        variant="sm"
        fontWeight={500}
        style={{marginTop: 'auto'}}
        color={colors.deepgrey}>
        {`${cedi} ${props.product.price.toFixed(2)}`}
      </Typography>
    </TouchableOpacity>
  );
};

export default ProductCard;
