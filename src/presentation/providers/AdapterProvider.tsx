"use client";
import { IProductAdapter } from "@/domain/interfaces/IProductAdapter";
import { ProductService } from "@/infrastructure/services/external/productService";
import { createProductAdapter } from "@/infrastructure/services/internal/adapters/product";
import React, { createContext } from "react";

export const AdapterContext = createContext<IProductAdapter | undefined>(
  undefined,
);

export const AdapterProvider = ({ children }) => {
  const productService = ProductService();
  const productAdapter = createProductAdapter(productService);

  return (
    <AdapterContext.Provider value={productAdapter}>
      {children}
    </AdapterContext.Provider>
  );
};
