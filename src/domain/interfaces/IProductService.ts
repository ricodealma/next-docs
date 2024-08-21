export interface IProductService {
  getProducts: () => Promise<any>;
  getProductById: (productId: any) => Promise<any>;
}
