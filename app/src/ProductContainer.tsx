import React, { useEffect, useState } from 'react'
import { getAllProducts } from './services/supabaseFunction';



export default function ProductContainer() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
            console.log(products);
        };
        getProducts();
    }, [])
    return (
        <div className='productContainer'>
            <li>
                <p id='productName'>Vans Old School</p>
                <img src="#" alt="" />
                <button>Product Detail</button>
                <button>Add to Cart</button>
            </li>
        </div>
    )
}
