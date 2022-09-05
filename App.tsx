import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AxiosResponse} from 'axios';
import React from 'react';
import {useDispatch} from 'react-redux';
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
import FavouritesScreen from './src/screens/FavouritesScreen';
import {REACT_APP_API_URL} from '@env';

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
      <BottomTab.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <BottomTab.Screen name="ProfileScreen" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const RootStackNavigation = () => {
  const {authentication, ui} = useSelectState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log('API: ', REACT_APP_API_URL);
    const launch = async () => {
      API.client.interceptors.response.use(
        (response: AxiosResponse<any>): AxiosResponse<any> => response,
        (error: any) => {
          if (error.response) {
            if (error.response.status === 401) {
              dispatch(authenticationAsyncActions.signout());
            }
          } else if (error.status) {
            if (error.status === 401) {
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
      }}>
      {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
      {authentication.isAuthenticated ? (
        <>
          <Stack.Screen name="MainScreen" component={BottomTabNavigation} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen name="SizeGuideScreen" component={SizeGuideScreen} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} />
          <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
          <Stack.Screen
            name="EditAddressScreen"
            component={EditAddressScreen}
          />
          <Stack.Screen
            name="AddNewAddressScreen"
            component={AddNewAddressScreen}
          />
          <Stack.Screen
            name="AddressBookScreen"
            component={AddressBookScreen}
          />
          <Stack.Screen
            name="ChangePasswordScreen"
            component={ChangePasswordScreen}
          />
          <Stack.Screen
            name="ChangeDetailsScreen"
            component={ChangeDetailsScreen}
          />
        </>
      ) : (
        <>
          {ui.isFirstLaunch && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
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
