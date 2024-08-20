import React from 'react';
import { AdapterProvider } from './providers/AdapterProvider';
import { ProductList } from './components/ProductList';


const Page = () => {
  return (
    <AdapterProvider>
      <ProductList />
    </AdapterProvider>
  );
};

export default Page;