

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../shopping-bag.svg"

import "./cart-icon.styles.scss"

const CartIcon = () => {
    const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className="cart-icon-container" onClick={toggleDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};
export default CartIcon;
