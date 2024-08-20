'use client'
import React, { createContext } from 'react';
import { createProductService } from '../services/external/product';
import { createProductAdapter } from '../adapters/product';

import { IProductAdapter } from '../interfaces/IProductAdapter';

export const AdapterContext = createContext<IProductAdapter | undefined>(undefined);

export const AdapterProvider = ({ children }) => {
    const productService = createProductService();
    const productAdapter = createProductAdapter(productService);

    return (
        <AdapterContext.Provider value={productAdapter}>
            {children}
        </AdapterContext.Provider>
    );
};
