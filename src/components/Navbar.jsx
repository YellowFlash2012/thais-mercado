import { useContext } from "react";
import { Link } from "react-router-dom";


import { UserContext } from "../contexts/user.context";
import { logout } from "../utils/firebase/firebase";

import Button from "./button/Button";

import "./navigation.styles.scss";

const Navbar = () => {
    const { currentUser } = useContext(UserContext);


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
                </div>
            </div>
        </>
    );
};
export default Navbar;
