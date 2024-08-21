import { IProductRepository } from "./IProductRepository";
import { IProductService } from "./IProductService";

export class ProductService implements IProductService {
    constructor(
        private readonly _productRepository: IProductRepository
    ) { }

    async getProducts(): Promise<any> {
        await this._productRepository.getProducts()
    }
    async getProductById(productId: any): Promise<any> {
        await this._productRepository.getProductById(productId)
    }
}