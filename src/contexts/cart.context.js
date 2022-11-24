import { createContext, useState } from "react";

export const CartContext = createContext();

const addCartItem = (cartItems, pdt) => {
    // find out if cartItem contains pdt
    const existingCartItem = cartItems.find(cartItem => cartItem.id === pdt.id);

    // if cartItem contains pdt, increment qty by 1
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === pdt.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem);
    }

    return [...cartItems, { ...pdt, qty: 1 }];
}

export const CartProvider = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (pdt) => {
        setCartItems(addCartItem(cartItems,pdt))
    }

    return (
        <CartContext.Provider
            value={{
                isDropdownOpen,
                setIsDropdownOpen,
                cartItems,
                addItemToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
