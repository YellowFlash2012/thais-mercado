

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss"

const CheckoutItem = ({ item }) => {
    const { clearItemfromCart, addItemToCart, removeItemfromCart } =
        useContext(CartContext);
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={item.imageUrl} alt="" />
            </div>

            <span className="name">{item.name}</span>

            <span className="quantity">
                <div className="arrow" onClick={()=>removeItemfromCart(item)}>
                    &#10094;
                </div>
                <span className="value">{item.qty}</span>
                <div className="arrow" onClick={()=>addItemToCart(item)}>
                    &#10095;
                </div>
            </span>

            <span className="price">${item.price}</span>

            <div
                className="remove-button"
                onClick={() => {
                    clearItemfromCart(item);
                }}
            >
                &#10005;
            </div>
        </div>
    );
};
export default CheckoutItem;
