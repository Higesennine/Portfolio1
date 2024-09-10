import React, { Key, useEffect, useState } from 'react';
import './App.scss';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import { getAllProducts } from './services/supabaseFunction';
import Header from './Components/Header';


//cartの中身をスクロールできるようにstylingしたい

export type Product = {
  id: Key,
  name: string,
  image_url: string,
  price: number
}

export type CartProduct = {
  id: Key,
  name: string,
  image_url: string,
  amount: number,
  price: number
}

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      setProducts(products!);
      console.log(products);
    };
    getProducts();
  }, [])

  const [currentCart, setCart] = useState<CartProduct[]>([]);
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

  useEffect(() => {
    console.log("Cart:", currentCart);
  }, [currentCart]);

  const totalPrice = currentCart.reduce((total, cartItem) => {
    return total + cartItem.amount * cartItem.price;
  }, 0);

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <div className='container'>
          <input type="text" id='searchBox' placeholder='Search Products...' />
          <ul>
            <ProductContainer products={products} addToCart={addToCart} />
          </ul>
        </div>
        <nav className='cartList'>
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
          <h3 className='cartList__total'>Total Price: ${totalPrice.toFixed(2)}</h3>
        </nav>
      </main>
    </div>
  );
}

export default App;
