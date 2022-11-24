
import { useContext } from "react";
import {Link,useNavigate} from "react-router-dom"

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const navigate = useNavigate();

    const { cartItems } = useContext(CartContext);

    const toCheckout=()=>navigate("/checkout")

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </div>

            <Button buttonType="inverted" onClick={toCheckout}>
                Checkout
            </Button>
        </div>
    );
};
export default CartDropdown;
