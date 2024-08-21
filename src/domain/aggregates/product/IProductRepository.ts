export interface IProductRepository {
  getProducts: () => Promise<any>;
  getProductById: (productId: any) => Promise<any>;
}
