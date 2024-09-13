import { createContext, useContext, useState } from "react";
import { CartProduct, Product } from "../App";

//contextの作成
type CartContext = {
    currentCart: CartProduct[];
    addToCart: (addedProduct: Product) => void;
    totalPrice: number
}

const CartContext = createContext<CartContext>({
    currentCart: [],
    addToCart: () => {},
    totalPrice: 0
  });

//providerの作成

export const CartProvider:  React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [currentCart, setCart] = useState<CartProduct[]>([])

    const addToCart = (addedProduct: Product) => {
        const existingProduct = currentCart.find((cartItem) => cartItem.id === addedProduct.id)
    
        if (existingProduct) {
          setCart(
            currentCart.map(cartItem => cartItem.id === addedProduct.id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem)
          );
        } else {
          setCart([...currentCart, { ...addedProduct, amount: 1 }])
        }
      }

      const totalPrice = currentCart.reduce((total, cartItem) => {
        return total + cartItem.amount * cartItem.price;
      }, 0);

      return (
        <CartContext.Provider value={{currentCart, addToCart, totalPrice}}>
            {children}
        </CartContext.Provider>
      );        
}

export const useCart = () => useContext(CartContext);