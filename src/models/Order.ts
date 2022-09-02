import {DetailedOrderProduct} from './../../types';
import {OrderProduct} from '../../types';
import OrderStatus from '../namespace/OrderStatus';
import UserAddress from './UserAddress';

export default interface Order {
  id: string;
  total: number;
  subtotal: number;
  discount: number;
  orderNumber: string;
  deliveryAddress: UserAddress;
  createdAt: string;
  products: Array<DetailedOrderProduct>;
  orderStatus: OrderStatus.Status;
}
