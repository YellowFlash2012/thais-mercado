import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../shop-data";
import { addCollAndDocs, getCatAndDocs } from "../utils/firebase/firebase";


export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(() => {
    //     addCollAndDocs('categories', SHOP_DATA);
    // },[])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCatAndDocs();

            console.log(categoryMap);

            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={{ categoriesMap }}>
            {children}
        </CategoriesContext.Provider>
    );
};