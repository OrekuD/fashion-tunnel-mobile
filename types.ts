import moment from 'moment';
import Product from './src/models/Product';
import ClothSizes from './src/namespaces/ClothSizes';
import ShoeSizes from './src/namespaces/ShoeSizes';

export type RootStackParams = {
  OnboardingScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  MainScreen: undefined;
  CartScreen: undefined;
  ChangeDetailsScreen: undefined;
  ChangePasswordScreen: undefined;
  AddressBookScreen: undefined;
  AddNewAddressScreen: undefined;
  EditAddressScreen: {userAddressId: string};
  CategoryScreen: {categoryTitle: string; categoryId: string};
  ProductScreen: {productId: string};
  SizeGuideScreen: {productId: string};
};

export type BottomTabsParams = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  OrdersScreen: undefined;
  ProfileScreen: undefined;
};

export class DeviceTypes {
  static readonly ANDROID = 'android';
  static readonly IOS = 'ios';
  static readonly WEB = 'web';
}

export interface CartProduct extends Product {
  count: number;
  total: number;
  size: ClothSizes.Status | ShoeSizes.Status;
}

export type SizeType = 'cloth' | 'shoe';

export namespace Request {
  export enum Status {
    PENDING = 'pending',
    BEFORE_FULFILLED = 'before-fulfilled',
    FULFILLED = 'fulfilled',
    BEFORE_REJECTED = 'before-rejected',
    REJECTED = 'rejected',
  }

  export interface Payload {
    [key: string]: string | number | boolean | object;
  }

  export interface Info {
    name: string;
    status: Status;
    message: string;
    payload: Payload;
  }

  export interface State {
    updatedAt: number;
    list: Array<Info>;
  }
}

export class Timing {
  public static now = () => moment().valueOf();
}
