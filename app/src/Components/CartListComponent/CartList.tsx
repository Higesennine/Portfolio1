import { Dispatch, SetStateAction } from "react";
import { CartProduct } from "../../App"

type Props = {
    currentCart: CartProduct[];
    setCart: Dispatch<SetStateAction<CartProduct[]>>;
    totalPrice: number;
}

export default function CartList({currentCart, setCart, totalPrice}: Props) {
  return (
    <nav className='cartList'>
        <h3 className='cartList__total'>Total Price: ${totalPrice.toFixed(2)}</h3>
    <ul className='cartList__main'>
      {currentCart.map((cartItem) => (
        <li className='cartList__item' key={cartItem.id}>
          <img src={cartItem.image_url} alt="" />
          <p>{cartItem.name}</p>
          <p>Price: ${cartItem.price}</p>
          <p>Amount: {cartItem.amount}</p>
          <p>Sub Total: ${cartItem.price * cartItem.amount}</p>
        </li>
      ))}
    </ul>
  </nav>
  )
}
