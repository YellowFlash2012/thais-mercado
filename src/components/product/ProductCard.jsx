
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./product-card.styles.jsx"
import { Footer, ProductCardContainer, ProductCardItemName, ProductCardItemPrice } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    return (
        <ProductCardContainer>
            <img src={product.imageUrl} alt={product.name} />

            <Footer>
                <ProductCardItemName>{product.name}</ProductCardItemName>
                <ProductCardItemPrice>${product.price}</ProductCardItemPrice>
            </Footer>

            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={() => addItemToCart(product)}
            >
                Add To Cart
            </Button>
        </ProductCardContainer>
    );
};
export default ProductCard;
