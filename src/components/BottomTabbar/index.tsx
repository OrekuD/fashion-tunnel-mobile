import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabsParams} from '../../../types';
import {screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import {
  HomeIcon,
  ExploreIcon,
  HeartIcon,
  UserIcon,
  DashboardIcon,
} from '../Icons';
import Typography from '../Typography';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: screenwidth,
    // height: normalizeY(66),
    paddingHorizontal: normalizeX(16),
    zIndex: 10000,
    backgroundColor: colors.white,
    paddingTop: normalizeY(16),
  },
  tab: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    height: normalizeY(8),
    width: normalizeY(8),
    borderRadius: normalizeY(8 / 2),
    backgroundColor: 'rgba(41,	37,	37, 0.8)',
    marginTop: normalizeY(6),
  },
  indicatorWrapper: {
    width: screenwidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 9999,
    width: screenwidth,
  },
});

const BottomTabbar = (props: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();
  type Route = {
    icon: typeof HomeIcon;
    route: keyof BottomTabsParams;
    label: string;
  };

  const routes: Array<Route> = React.useMemo(
    () => [
      {
        icon: HomeIcon,
        route: 'HomeScreen',
        label: 'Home',
      },
      {
        icon: DashboardIcon,
        route: 'ExploreScreen',
        label: 'Explore',
      },
      {
        icon: HeartIcon,
        route: 'WishlistScreen',
        label: 'Wishlist',
      },
      {
        icon: UserIcon,
        route: 'ProfileScreen',
        label: 'Profile',
      },
    ],
    [],
  );

  return (
    <>
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 1)',
        ]}
        style={{
          ...styles.linearGradient,
          height: normalizeY(66) + (bottom || normalizeY(12)) + normalizeY(100),
        }}
        pointerEvents="none"
      />
      <View
        style={{
          ...styles.container,
          paddingBottom: (bottom || normalizeY(12)) + normalizeY(10),
          // height: HEIGHT,
          // bottom: bottom || normalizeY(12),
          bottom: 0,
          // backgroundColor: 'red',
        }}>
        {routes.map(({icon: Icon, route, label}, index) => {
          const isFocused = props.state.index === index;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              onPress={() => props.navigation.navigate(route)}
              style={styles.tab}>
              <Icon
                width={normalizeY(26)}
                height={normalizeY(26)}
                color={isFocused ? 'rgba(41,	37,	37, 0.8)' : '#B9B6B8'}
                fill={isFocused ? 'rgba(41,	37,	37, 0.15)' : ''}
              />
              <View
                style={{...styles.activeIndicator, opacity: isFocused ? 1 : 0}}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default BottomTabbar;
