import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import { addCollAndDocs } from "../utils/firebase/firebase";


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     addCollAndDocs('categories', SHOP_DATA);
    // },[])

    return <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
}