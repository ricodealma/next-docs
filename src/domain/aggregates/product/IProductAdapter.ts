import { IProduct } from "./product/IProduct";

export interface IProductAdapter {
  getProductList: () => Promise<IProduct[]>;
  getProductDetails: (productId: string) => Promise<IProduct>;
}
