
import {Link} from "react-router-dom"
import ProductCard from "../product/ProductCard";
import { CategoryPreviewContainer, Preview, TitleLink } from "./category-preview.styles";


const CategoryPreview = ({title,products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <TitleLink to={title}>{title.toLowerCase()}</TitleLink>
            </h2>

            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                }
            </Preview>
        </CategoryPreviewContainer>
    );
};
export default CategoryPreview;
