import { IProduct } from "@/domain/aggregates/product/IProduct";
import { IProductAdapter } from "@/domain/aggregates/product/IProductAdapter";
import { IProductRepository } from "@/domain/aggregates/product/IProductRepository";

export const createProductAdapter = (
    productRepository: IProductRepository,
): IProductAdapter => ({
    getProductList: async (): Promise<IProduct[]> => {
        const products = await productRepository.getProducts();
        return products.map(({ id, name, price }) => ({
            id,
            name,
            price,
        }));
    },

    getProductDetails: async (productId: string): Promise<IProduct> => {
        const product = await productRepository.getProductById(productId);
        const { id, name, price, description } = product;
        return { id, name, price, description };
    },
});
