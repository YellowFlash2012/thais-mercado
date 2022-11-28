import { BackgroundImage, Body, CategoryItemContainer } from "./category-item.styles";

const CategoryItem = ({ category }) => {

    return (
        
            <CategoryItemContainer>
                <BackgroundImage
                    imageUrl={category.imageUrl}
                />
                <Body>
                    <h2>{category.title}</h2>
                    <p>shop now</p>
                </Body>
            </CategoryItemContainer>
        
    );
};
export default CategoryItem;
