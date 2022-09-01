import {PayloadAction} from '@reduxjs/toolkit';
import {CartProduct} from '../../types';
import Product from '../models/Product';
import UserAddress from '../models/UserAddress';

export interface AuthenticationState {
  isAuthenticated: boolean;
  accessToken: string;
  expiryAt: number;
}

export interface CartState {
  total: number;
  subtotal: number;
  discountPercentage: number;
  discount: number;
  products: Array<CartProduct>;
}

export interface ProductsState {
  list: Array<Product>;
}

export interface UserAddressState {
  list: Array<UserAddress>;
}

export interface FavouritesState {
  list: Array<Product>;
}

export interface UIState {
  isFirstLaunch: boolean;
}

export type CPA<T = any> = PayloadAction<T> & {dispatch: Function};
