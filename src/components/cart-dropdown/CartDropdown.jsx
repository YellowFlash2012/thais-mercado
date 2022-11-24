
import Button from "../button/Button";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    return <div className="cart-dropdown-container">
        <div className="cart-items">
            <img src="" alt="" />
            <div></div>
        </div>

        <Button buttonType="inverted">Checkout</Button>
    </div>;
};
export default CartDropdown;
