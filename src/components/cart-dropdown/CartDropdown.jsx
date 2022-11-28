
import { useContext } from "react";
import {Link,useNavigate} from "react-router-dom"

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartDropdownContainer, CartItems, EmptyMsg } from "./cart-dropdown.styles";


const CartDropdown = () => {
    const navigate = useNavigate();

    const { cartItems } = useContext(CartContext);

    const toCheckout=()=>navigate("/checkout")

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))):(<EmptyMsg>Your cart is empty</EmptyMsg>)}
            </CartItems>

            <Button buttonType="inverted" onClick={toCheckout}>
                Checkout
            </Button>
        </CartDropdownContainer>
    );
};
export default CartDropdown;
