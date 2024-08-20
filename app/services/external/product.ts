import { IProduct } from "../../interfaces/IProduct";
import { IProductService } from "../../interfaces/IProductService";
import http from "../internal/http";

export const createProductService = () : IProductService => ({
    getProducts: async (): Promise<IProduct[]> => {
        const response = await http.get<IProduct[]>('/products');
        return response.data;
    },

    getProductById: async (productId: string): Promise<IProduct> => {
        const response = await http.get<IProduct>(`/products/${productId}`);
        return response.data;
    },
});




