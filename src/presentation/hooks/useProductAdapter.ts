import { IProductAdapter } from "@/domain/aggregates/product/IProductAdapter";
import { AdapterContext } from "../providers/AdapterProvider";
import { useContext } from "react";

export const useProductAdapter = (): IProductAdapter => {
    const adapter = useContext(AdapterContext);
    if (!adapter) {
        throw new Error("useProductAdapter must be used within AdapterProvider");
    }
    return adapter;
};
