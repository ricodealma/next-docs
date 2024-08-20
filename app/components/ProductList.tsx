'use client'

import React, { useState, useEffect } from 'react';
import { useProductAdapter } from '../hooks/useProductAdapter';
import { IProduct } from '../interfaces/IProduct';


export const ProductList = () => {
    const productAdapter = useProductAdapter();
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await productAdapter.getProductList();
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching product list:', error);
            }
        };

        fetchProducts();
    }, [productAdapter]);

    return (
        <div>
            <h2>Product List</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
};
