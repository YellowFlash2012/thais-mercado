import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { CategoriesContext } from "../contexts/product.context";

import "./subcategory.styles.scss";

const SubCategory = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className="subcategory-title">{category}</h2>
        <div className="category-container">
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
        </div>
                    </>
    );
};
export default SubCategory;
