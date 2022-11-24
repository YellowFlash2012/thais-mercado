import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart.context";


import { UserContext } from "../contexts/user.context";
import { logout } from "../utils/firebase/firebase";

import Button from "./button/Button";
import CartDropdown from "./cart-dropdown/CartDropdown";
import CartIcon from "./cart-icon/CartIcon";

import "./navigation.styles.scss";

const Navbar = () => {
    const { currentUser } = useContext(UserContext);

    const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);


    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <div className="logo">
                        <h2 style={{ fontWeight: "bold" }}>ThaisMercado</h2>
                    </div>
                </Link>

                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    <Link to="/contact" className="nav-link">
                        CONTACT
                    </Link>

                    {currentUser ? (
                        <Button onClick={logout} buttonType="google">LOGOUT</Button>
                    ) : (
                        <Link to="/login" className="nav-link">
                            LOGIN
                        </Link>
                    )}

                    <CartIcon/>
                </div>

                {isDropdownOpen && <CartDropdown/>}
            </div>
        </>
    );
};
export default Navbar;
