import React, { useEffect, useState } from 'react'
import './ProductContainer.scss';
import { Product } from '../../App';
import { useProducts } from '../../contexts/productsContext';
import { useCart } from '../../contexts/cartContext';

//contextを使うため、Propsは不要となった
// type Props = {
//     products: Product[],
//     addToCart: (addedProduct: Product) => void
// }

export default function ProductContainer() {
    const {products} = useProducts();
    const {addToCart} = useCart();

    return (
        <div className='productContainer'>
            {products.map((product: Product) => (
                <li className='productList' key={product.id}>
                    <img src= {product.image_url} alt="" />
                    <p id='productName'>{product.name}</p>
                    <button id='productDetail-button'>Product Detail</button>
                    <button id='addToCart-button' onClick={() => addToCart(product)}>Add to Cart</button>
                </li>
            ))}
        </div>
    )
}
