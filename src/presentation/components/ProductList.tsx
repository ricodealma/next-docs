"use client";
import React from "react";
import { useProductList } from "../hooks/useProductQueries";

export const ProductList = () => {
  const { data: products, isLoading, error } = useProductList();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

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
