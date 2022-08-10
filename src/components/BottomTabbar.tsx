import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Image,
  ImageRequireSource,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {BottomTabsParams} from '../../types';
import {screenwidth} from '../constants';
import colors from '../constants/colors';
import {normalizeX, normalizeY} from '../utils/normalize';
import {CartIcon, ExploreIcon, HomeIcon, UserIcon} from './Icons';
import Typography from './Typography';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: normalizeX(18),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: screenwidth - normalizeX(36),
    height: normalizeY(66),
    borderRadius: normalizeY(66 / 2),
    paddingHorizontal: normalizeX(16),
    zIndex: 10000,
    backgroundColor: colors.deepgrey,
    shadowColor: colors.grey,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 8,
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
    backgroundColor: colors.orange,
    marginBottom: normalizeY(6),
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
  const HEIGHT = React.useMemo(
    () => normalizeY(40) + (bottom || normalizeY(12)) + normalizeY(16),
    [bottom],
  );

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
        icon: ExploreIcon,
        route: 'ExploreScreen',
        label: 'Explore',
      },
      {
        icon: CartIcon,
        route: 'OrdersScreen',
        label: 'Orders',
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
      />
      <View
        style={{
          ...styles.container,
          // height: HEIGHT,
          bottom: bottom || normalizeY(12),
        }}>
        {routes.map(({icon: Icon, route, label}, index) => {
          const isFocused = props.state.index === index;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              onPress={() => props.navigation.navigate(route)}
              style={styles.tab}>
              {isFocused ? (
                <>
                  <View style={styles.activeIndicator} />
                  <Typography
                    variant="sm"
                    fontWeight={500}
                    color={colors.white}>
                    {label.toUpperCase()}
                  </Typography>
                </>
              ) : (
                <Icon
                  width={normalizeY(24)}
                  height={normalizeY(24)}
                  color="#B9B6B8"
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default BottomTabbar;
