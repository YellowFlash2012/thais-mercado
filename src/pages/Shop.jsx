import { useContext } from "react";
import {Routes,Route} from "react-router-dom"
import CategoryPreview from "../components/category-preview/CategoryPreview";

import { CategoriesContext } from "../contexts/product.context";
import Category from "./Category";


import "./shop.styles.scss";
import SubCategory from "./SubCategory";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        // <div className="shop-container">
        //     {Object.keys(categoriesMap).map((title) => {
        //         const products = categoriesMap[title];

        //         return (
        //             <CategoryPreview key={title} title={title} products={products}/>
        //         )
        //     })}
        // </div>

        <Routes>
            <Route index element={<Category/>}/>
            <Route path=":category" element={<SubCategory/>}/>
        </Routes>
    );
};
export default Shop;
