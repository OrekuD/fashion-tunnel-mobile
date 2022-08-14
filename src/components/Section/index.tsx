import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../../types';
import {images, cedi, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import CachedImage from '../CachedImage';
import Typography from '../Typography';

const styles = StyleSheet.create({});

interface Props {
  sectionTitle: string;
  sectionDescription: string;
  products: Array<any>;
  navigation: StackNavigationProp<RootStackParams>;
}

const Section = (props: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const itemWidth = React.useMemo(() => screenwidth * 0.55, []);
  const spacerWidth = React.useMemo(() => (screenwidth - itemWidth) / 2, []);

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
        {props.products.map((uri, index) => {
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
                    productId: '',
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
                    source={{uri}}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="cover"
                  />
                </View>
                <Typography
                  variant="sm"
                  fontWeight={500}
                  style={{marginTop: normalizeY(14)}}
                  color={colors.deepgrey}>
                  Off-White
                </Typography>
                <Typography
                  variant="sm"
                  numberOfLines={2}
                  style={{marginTop: normalizeY(8)}}
                  color={colors.deepgrey}>
                  Do consectetur ad exercitation ad minim aliquip veniam ipsum
                  ullamco ex elit pariatur pariatur dolor. Aliquip officia
                  consectetur qui et reprehenderit id id consectetur ex culpa.
                  Elit fugiat irure excepteur veniam duis enim veniam elit.
                  Deserunt eiusmod proident incididunt laboris minim dolore nisi
                  ipsum qui proident eiusmod sint irure deserunt. Amet pariatur
                  deserunt ea minim culpa aliqua laboris nostrud.
                </Typography>
                <Typography
                  variant="sm"
                  fontWeight={500}
                  style={{marginTop: normalizeY(14)}}
                  color={colors.deepgrey}>
                  {`${cedi}123.99`}
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
