import { IProductRepository } from "@/domain/aggregates/product/IProductRepository";
import http from "../internal/http";

export class ProductRepository implements IProductRepository {

  async getProducts(): Promise<any[]> {
    const response = await http.get<any[]>("/products");
    return response.data;
  }

  async getProductById(productId: string): Promise<any> {
    const response = await http.get<any>(`/products/${productId}`);
    return response.data;
  }
}
