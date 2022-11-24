
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    return <div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem}/>
                
            ))}
        </div>

        <Button buttonType="inverted">Checkout</Button>
    </div>;
};
export default CartDropdown;
