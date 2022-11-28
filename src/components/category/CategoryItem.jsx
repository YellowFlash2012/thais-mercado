import {useNavigate} from "react-router-dom"

import { BackgroundImage, Body, CategoryItemContainer } from "./category-item.styles";

const CategoryItem = ({ category }) => {
    const navigate = useNavigate();

    const onNavigateHandler=()=>navigate(category.route)

    return (
        <CategoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={category.imageUrl} />
            <Body>
                <h2>{category.title}</h2>
                <p>shop now</p>
            </Body>
        </CategoryItemContainer>
    );
};
export default CategoryItem;
