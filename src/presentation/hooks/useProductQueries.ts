import { useQuery } from "@tanstack/react-query";
import { useProductAdapter } from "./useProductAdapter";
import { IProduct } from "../../domain/interfaces/IProduct";

export const useProductList = () => {
  const productAdapter = useProductAdapter();
  return useQuery<IProduct[], Error>({
    queryKey: ["productList"],
    queryFn: productAdapter.getProductList,
  });
};

export const useProductDetails = (productId: string) => {
  const productAdapter = useProductAdapter();
  return useQuery<IProduct, Error>({
    queryKey: ["productDetails", productId],
    queryFn: () => productAdapter.getProductDetails(productId),
  });
};
