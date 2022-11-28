

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { Arrow, CheckoutItemContainer, CheckoutItemName, CheckoutItemPrice, CheckoutItemQty, ImageContainer, RemoveButton, Value } from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item }) => {
    const { clearItemfromCart, addItemToCart, removeItemfromCart } =
        useContext(CartContext);
    
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={item.imageUrl} alt="" />
            </ImageContainer>

            <CheckoutItemName>{item.name}</CheckoutItemName>

            <CheckoutItemQty>
                <Arrow onClick={()=>removeItemfromCart(item)}>
                    &#10094;
                </Arrow>
                <Value>{item.qty}</Value>
                <Arrow onClick={()=>addItemToCart(item)}>
                    &#10095;
                </Arrow>
            </CheckoutItemQty>

            <CheckoutItemPrice>${item.price}</CheckoutItemPrice>

            <RemoveButton
                onClick={() => {
                    clearItemfromCart(item);
                }}
            >
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};
export default CheckoutItem;
