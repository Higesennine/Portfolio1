import React, { Key, useEffect, useState } from 'react';
import './App.scss';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import { getAllProducts } from './services/supabaseFunction';
import Header from './Components/Header';
import CartList from './Components/CartListComponent/CartList';
import { ProductProvider } from './contexts/productsContext';
import { CartProvider } from './contexts/cartContext';


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
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <ProductProvider>
          <CartProvider>
            <div className='container'>
              <input type="text" id='searchBox' placeholder='Search Products...' />
              <ul>
                <ProductContainer />
              </ul>
            </div>
            <CartList  />
          </CartProvider>
        </ProductProvider>
      </main>
    </div>
  );
}

export default App;
