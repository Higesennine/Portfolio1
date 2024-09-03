import React, { useEffect, useState } from 'react';
import './App.scss';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import { getAllProducts } from './services/supabaseFunction';

export type Product = {
  id: number,
  name: string,
  image_url: string
}

function App() {

  const handleCart = () => {
    const main = document.querySelector(".main");
    main?.classList.toggle("cartOpen");
  }

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
        const products = await getAllProducts();
        setProducts(products!);
        console.log(products);
    };
    getProducts();
}, [])

  return (
    <div className="App">
      <header className="header">
        <h2 className='headerTitle'>Menta Mart</h2>
          <button className='cartButton' onClick={handleCart}>
            <p>Cart</p>
          </button>
      </header>
      <main className='main'>
        <div className='container'>
          <input type="text" id='searchBox' placeholder='Search Products...' />
          <ul>
          <ProductContainer products={products}/>
          </ul>
        </div>
        <nav className='cartList'>
          <ul className='cartList-main'>
            <li className='cartList-item'></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}

export default App;
