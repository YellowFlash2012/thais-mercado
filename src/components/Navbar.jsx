import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart.context";


import { UserContext } from "../contexts/user.context";
import { logout } from "../utils/firebase/firebase";

import Button from "./button/Button";
import CartDropdown from "./cart-dropdown/CartDropdown";
import CartIcon from "./cart-icon/CartIcon";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";


const Navbar = () => {
    const { currentUser } = useContext(UserContext);

    const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);


    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <div className="logo">
                        <h2 style={{ fontWeight: "bold" }}>ThaisMercado</h2>
                    </div>
                </LogoContainer>

                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>

                    {currentUser ? (
                        <NavLink as='span' onClick={logout} >LOGOUT</NavLink>
                    ) : (
                        <NavLink to="/login">
                            LOGIN
                        </NavLink>
                    )}

                    <CartIcon/>
                </NavLinks>

                {isDropdownOpen && <CartDropdown/>}
            </NavigationContainer>
        </>
    );
};
export default Navbar;
