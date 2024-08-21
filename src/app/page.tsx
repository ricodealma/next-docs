"use client";

import { ProductList } from "@/presentation/components/ProductList";
import Providers from "@/presentation/providers/Providers";
import React from "react";

const Page = () => {
  return (
    <Providers>
      <ProductList />
    </Providers>
  );
};

export default Page;
