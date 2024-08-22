import React from 'react';
import './App.css';
import ProductContainer from './ProductContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className='headerTitle'>Menta Mart</h2>
        <form action="" method='get' className='headerForm'>
          <a href="#">Cart</a>
        </form>
      </header>
      <main className='main'>
        <div className='Container'>
          <input type="text" placeholder='Search Products' />
          <ul>
          <ProductContainer />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
