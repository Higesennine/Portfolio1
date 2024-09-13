import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../App";
import { getAllProducts } from "../services/supabaseFunction";

//contextの作成
const ProductContext = createContext<{products: Product[]}>({products: []})

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products!);
        };
        fetchProducts();
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts= () => useContext(ProductContext);