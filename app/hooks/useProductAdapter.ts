// hooks/useProductAdapter.ts
import { useContext } from 'react';
import { IProductAdapter } from '../interfaces/IProductAdapter';
import { AdapterContext } from '../providers/AdapterProvider';


export const useProductAdapter = (): IProductAdapter => {
    const adapter = useContext(AdapterContext);
    if (!adapter) {
        throw new Error('useProductAdapter must be used within AdapterProvider');
    }
    return adapter;
};
