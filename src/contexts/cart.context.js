import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <CartContext.Provider value={{ isDropdownOpen, setIsDropdownOpen }}>
            {children}
        </CartContext.Provider>
    );
};
