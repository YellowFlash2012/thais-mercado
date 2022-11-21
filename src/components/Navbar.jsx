import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navbar = () => {
    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <div className="logo">
                        <h2 style={{fontWeight:'bold'}}>ThaisMercado</h2>
                    </div>
                </Link>

                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    <Link to="/contact" className="nav-link">
                        CONTACT
                    </Link>
                    <Link to="/login" className="nav-link">
                        LOGIN
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Navbar;
