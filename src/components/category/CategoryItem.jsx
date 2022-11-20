import "./category-item.styles.scss";


const CategoryItem = ({ category }) => {
    console.log(category);
    return (
        
            <div className="category-container">
                <div
                    className="background-image"
                    style={{ backgroundImage: `url(${category.imageUrl})` }}
                ></div>
                <div className="category-body-container">
                    <h2>{category.title}</h2>
                    <p>shop now</p>
                </div>
            </div>
        
    );
};
export default CategoryItem;
