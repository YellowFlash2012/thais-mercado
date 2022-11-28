import { CartItemContainer, ItemDetail, ItemDetailContainer } from "./cart-item.styles";


const CartItem = ({ cartItem }) => {
    const { name, qty, price, imageUrl } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetailContainer>
                <ItemDetail>{name}</ItemDetail>
                <ItemDetail>
                    {qty} x ${price}
                </ItemDetail>
            </ItemDetailContainer>
        </CartItemContainer>
    );
};
export default CartItem;
