import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

import "./checkout.styles.scss";
const Checkout = () => {
    const { cartItems, addItemToCart, removeItemfromCart } =
        useContext(CartContext);

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <img src={item.imageUrl} alt="" />
                    <h2>{item.name}</h2>

                    <h2>
                        <button onClick={() => addItemToCart(item)}>+</button>
                        {item.qty}
                        <button onClick={() => removeItemfromCart(item)}>-</button>
                    </h2>

                    <h2>{item.price}</h2>
                </div>
            ))}
        </div>
    );
};
export default Checkout;
