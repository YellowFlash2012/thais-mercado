
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./product-card.styles.scss"

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={product.name} />

            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">${product.price}</span>
            </div>

            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={() => addItemToCart(product)}
            >
                Add To Cart
            </Button>
        </div>
    );
};
export default ProductCard;
