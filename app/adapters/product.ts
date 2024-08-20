import { IProduct } from "../interfaces/IProduct";
import { IProductAdapter } from "../interfaces/IProductAdapter";
import { IProductService } from "../interfaces/IProductService";


export const createProductAdapter = (productService: IProductService): IProductAdapter => ({
    getProductList: async (): Promise<IProduct[]> => {
        const products = await productService.getProducts();
        return products.map(({ id, name, price }) => ({
            id,
            name,
            price,
        }));
    },

    getProductDetails: async (productId: string): Promise<IProduct> => {
        const product = await productService.getProductById(productId);
        const { id, name, price, description } = product;
        return { id, name, price, description };
    },
});
