import {SizeType} from '../../types';
import ProductCategories from '../namespaces/ProductCategories';
import ProductGender from '../namespaces/ProductGender';

export default interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  productQuantity: number;
  extraInfo: string;
  gender: ProductGender.Status;
  productCategory: ProductCategories.Status;
  sizeType: SizeType;
  images: Array<string>;
}
