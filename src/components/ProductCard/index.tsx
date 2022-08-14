import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {cedi, images, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import CachedImage from '../CachedImage';
import {ChevronRightIcon} from '../Icons';
import Typography from '../Typography';

const styles = StyleSheet.create({
  container: {
    width: (screenwidth - normalizeX(36)) / 2 - normalizeX(6),
    // backgroundColor: colors.white,
    // backgroundColor: colors.error,
    marginBottom: normalizeY(18),
  },
  imageContainer: {
    width: '100%',
    height: ((screenwidth - normalizeX(36)) / 2 - normalizeX(6)) * 1.25,
  },
});

interface Props {
  product: any;
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
          source={{uri: images[0]}}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <Typography
        variant="sm"
        fontWeight={500}
        style={{marginTop: normalizeY(10)}}
        color={colors.deepgrey}>
        Off-White
      </Typography>
      <Typography
        variant="sm"
        numberOfLines={2}
        style={{marginTop: normalizeY(6)}}
        color={colors.deepgrey}>
        Do consectetur ad exercitation ad minim aliquip veniam ipsum ullamco ex
        elit pariatur pariatur dolor. Aliquip officia consectetur qui et
        reprehenderit id id consectetur ex culpa. Elit fugiat irure excepteur
        veniam duis enim veniam elit. Deserunt eiusmod proident incididunt
        laboris minim dolore nisi ipsum qui proident eiusmod sint irure
        deserunt. Amet pariatur deserunt ea minim culpa aliqua laboris nostrud.
      </Typography>
      <Typography
        variant="sm"
        fontWeight={500}
        style={{marginTop: normalizeY(10)}}
        color={colors.deepgrey}>
        {`${cedi}123.99`}
      </Typography>
    </TouchableOpacity>
  );
};

export default ProductCard;
