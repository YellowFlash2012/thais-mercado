import { createContext, useState } from "react";

import shop_data from "../shop-data.json"

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(shop_data);

    return <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
}