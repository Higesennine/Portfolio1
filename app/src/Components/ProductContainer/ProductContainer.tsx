import React, { useEffect, useState } from 'react'
import './ProductContainer.scss';
import { Product } from '../../App';

type Props = {
    products: Product[],
    addToCart: (addedProduct: Product) => void
}

export default function ProductContainer({products, addToCart}: Props) {

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
            {/* <li>
                <p id='productName'>Vans Old School</p>
                <img src="https://images.vans.com/is/image/Vans/VN0A5FCB_B9M_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0" alt="" />
                <button>Product Detail</button>
                <button>Add to Cart</button>
            </li> */}
        </div>
    )
}
