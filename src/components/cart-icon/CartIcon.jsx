

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";



const CartIcon = () => {
    const { isDropdownOpen, setIsDropdownOpen, cartCount } =
        useContext(CartContext);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon />
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    );
};
export default CartIcon;
