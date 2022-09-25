import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AxiosResponse} from 'axios';
import {useDispatch} from 'react-redux';
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
import authenticationAsyncActions from './src/store/actions/authentication.action';
import {useSelectState} from './src/store/selectors';
import {BottomTabsParams, RootStackParams} from './types';
import API from './src/constants/api';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import ChangeDetailsScreen from './src/screens/ChangeDetailsScreen';
import AddressBookScreen from './src/screens/AddressBookScreen';
import AddNewAddressScreen from './src/screens/AddNewAddressScreen';
import EditAddressScreen from './src/screens/EditAddressScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import OrderScreen from './src/screens/OrderScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import ProfilePictureScreen from './src/screens/ProfilePictureScreen';
import SearchScreen from './src/screens/SearchScreen';
import BottomTabbar from './src/components/BottomTabbar';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import EnterCodeScreen from './src/screens/EnterCodeScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

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
      <BottomTab.Screen name="WishlistScreen" component={WishlistScreen} />
      <BottomTab.Screen name="ProfileScreen" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const RootStackNavigation = () => {
  const {authentication, ui} = useSelectState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const launch = async () => {
      API.client.interceptors.response.use(
        (response: AxiosResponse<any>): AxiosResponse<any> => response,
        (error: any) => {
          if (error.response) {
            if (error.response.status === 403) {
              dispatch(authenticationAsyncActions.signout());
            }
          } else if (error.status) {
            if (error.status === 403) {
              dispatch(authenticationAsyncActions.signout());
            }
          }

          return Promise.reject(error);
        },
      );

      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) {
        API.addAccessToken(accessToken);
      }
    };

    launch().then(() => {});
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ui.isFirstLaunch ? 'OnboardingScreen' : 'MainScreen'}>
      <Stack.Screen name="MainScreen" component={BottomTabNavigation} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="SizeGuideScreen" component={SizeGuideScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen name="EditAddressScreen" component={EditAddressScreen} />
      <Stack.Screen name="EnterCodeScreen" component={EnterCodeScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="AddNewAddressScreen"
        component={AddNewAddressScreen}
      />
      <Stack.Screen name="AddressBookScreen" component={AddressBookScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        name="ChangeDetailsScreen"
        component={ChangeDetailsScreen}
      />
      <Stack.Screen
        name="ProfilePictureScreen"
        component={ProfilePictureScreen}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      {ui.isFirstLaunch && (
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
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
