import moment from 'moment';
import Product from './src/models/Product';
import OrderStatus from './src/namespace/OrderStatus';
import ClothSizes from './src/namespaces/ClothSizes';
import ProductCategories from './src/namespaces/ProductCategories';
import ProductGender from './src/namespaces/ProductGender';
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
  CheckoutScreen: undefined;
  OrdersScreen: undefined;
  SearchScreen: undefined;
  ProfilePictureScreen: undefined;
  ForgotPasswordScreen: undefined;
  EnterCodeScreen: undefined;
  ResetPasswordScreen: undefined;
  OrderScreen: {orderId: string};
  EditAddressScreen: {userAddressId: string};
  CategoryScreen: {categoryId: ProductCategories.Status};
  ProductScreen: {productId: string};
  SizeGuideScreen: {productId: string};
};

export type BottomTabsParams = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  WishlistScreen: undefined;
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

export interface OrderProduct {
  id: string;
  price: number;
  count: number;
  total: number;
}

export interface OrderStatusTimeStamp {
  status: OrderStatus.Status;
  time: string;
}

export interface DetailedOrderProduct {
  id: string;
  price: number;
  count: number;
  total: number;
  name: string;
  description: string;
  extraInfo: string;
  gender: ProductGender.Status;
  productQuantity: number;
  images: Array<string>;
  sizeType: SizeType;
  productCategory: ProductCategories.Status;
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

export enum Events {
  USER_ADDRESS_CREATE = 'user:address:create',
  USER_ORDER_CREATE = 'user:order:create',
  USER_PROFILE_UPDATE = 'user:profile:update',
  USER_FAVOURITE_ITEM = 'user:favourite:item',
  ORDER_STATUS_CHANGE = 'order:status:change',
}
