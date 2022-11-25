import { Fragment, useContext } from "react";
import ProductCard from "../components/product/ProductCard";
import { CategoriesContext } from "../contexts/product.context";

import "./shop.styles.scss";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                    <h2 style={{marginTop:'1rem'}}>{title}</h2>
                    <div className="products-container">
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </>
    );
};
export default Shop;
