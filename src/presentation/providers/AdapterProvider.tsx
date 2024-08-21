"use client";
import { IProductAdapter } from "@/domain/aggregates/product/IProductAdapter";
import { ProductRepository } from "@/infrastructure/repositories/productRepository";

import { createProductAdapter } from "@/infrastructure/internal/adapters/product";
import React, { createContext } from "react";

export const AdapterContext = createContext<IProductAdapter | undefined>(
    undefined,
);

export const AdapterProvider = ({ children }) => {
    const productRepository = new ProductRepository;
    const productAdapter = createProductAdapter(productRepository);

    return (
        <AdapterContext.Provider value={productAdapter}>
            {children}
        </AdapterContext.Provider>
    );
};
