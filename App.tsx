import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabbar from './src/components/BottomTabbar';
import CartScreen from './src/screens/CartScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import HomeScreen from './src/screens/HomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ProductScreen from './src/screens/ProductScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SizeGuideScreen from './src/screens/SizeGuideScreen';
import {useSelectState} from './src/store/selectors';
import {BottomTabsParams, RootStackParams} from './types';

const Stack = createStackNavigator<RootStackParams>();
const BottomTab = createBottomTabNavigator<BottomTabsParams>();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      backBehavior="history"
      tabBar={props => <BottomTabbar {...props} />}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="ExploreScreen" component={ExploreScreen} />
      <BottomTab.Screen name="OrdersScreen" component={OrdersScreen} />
      <BottomTab.Screen name="ProfileScreen" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const RootStackNavigation = () => {
  const {authentication} = useSelectState();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
      {authentication.isAuthenticated ? (
        <>
          <Stack.Screen name="MainScreen" component={BottomTabNavigation} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen name="SizeGuideScreen" component={SizeGuideScreen} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default App;
