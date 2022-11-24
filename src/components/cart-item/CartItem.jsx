
import "./cartitem.styles.scss"

const CartItem = ({ cartItem }) => {
    const { name, qty } = cartItem;

    return (
        <div>
            <img src="" alt="" />
            <div>

            <h2>{name}</h2>

            <p>{qty}</p>
            </div>
        </div>
    );
};
export default CartItem;
