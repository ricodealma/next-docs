"use client";

import { ProductList } from "@/presentation/components/ProductList";
import { AdapterProvider } from "@/presentation/providers/AdapterProvider";
import { QueryProvider } from "@/presentation/providers/QueryProvider";
import React from "react";

const Providers = ({ children }) => {
  return (
    <QueryProvider>
      <AdapterProvider>{children}</AdapterProvider>
    </QueryProvider>
  );
};

export default Providers;
