import { IProductService } from "@/domain/interfaces/IProductService";
import http from "../internal/http";

export const ProductService = (): IProductService => ({
  getProducts: async (): Promise<any[]> => {
    const response = await http.get<any[]>("/products");
    return response.data;
  },

  getProductById: async (productId: string): Promise<any> => {
    const response = await http.get<any>(`/products/${productId}`);
    return response.data;
  },
});
