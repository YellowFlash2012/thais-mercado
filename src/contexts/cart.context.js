import { createContext, useEffect, useState } from "react";

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

const removeCartItem = (cartItems, pdt) => {
    // find out if cartItem contains pdt
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === pdt.id
    );

    // if qty===1, remove item from cart
    if (existingCartItem.qty===1) {
        return cartItems.filter(cartItem => cartItem.id !== pdt.id);
    }

    // return cartItems with matching cartItem with qty-1
    return cartItems.map((cartItem) =>
        cartItem.id === pdt.id
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
    );
}

export const CartProvider = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.qty, 0);

        setCartCount(newCartCount);
    },[cartItems])

    const addItemToCart = (pdt) => {
        setCartItems(addCartItem(cartItems,pdt))
    }
    
    const removeItemfromCart = (pdt) => {
        setCartItems(removeCartItem(cartItems, pdt));
    }


    return (
        <CartContext.Provider
            value={{
                isDropdownOpen,
                setIsDropdownOpen,
                cartItems,
                addItemToCart,
                cartCount,
                removeItemfromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
