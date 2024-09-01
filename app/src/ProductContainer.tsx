import React, { useEffect, useState } from 'react'
import { getAllProducts } from './services/supabaseFunction';
import './ProductContainer.css';



export default function ProductContainer() {
    type Product = {
        id: number,
        name: string,
        image_url: string
    }
    
    type CartProduct = {
        id: number,
        name: string,
        image_url: string
    }

    const [products, setProducts] = useState<Product[]>([]);
    const [currentCart, setCart] = useState<CartProduct[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts();
            setProducts(products!);
            console.log(products);
        };
        getProducts();
    }, [])
//handleCartを使ってcurrentCartに商品を入れるところまで終わった
//次にやりたいことはcurrentCartの中身をレンダリング。でも別のコンポーネント内でする必要がある
    const handleCart = (addedProduct:any) => {
        setCart([...currentCart, addedProduct]);
    }

    useEffect(() => {
        console.log("Cart:", currentCart);
    }, [currentCart]);

    return (
        <div className='productContainer'>
            {products.map((product: { id: React.Key, name: string, image_url:string}) => (
                <li className='productList' key={product.id}>
                    <img src= {product.image_url} alt="" />
                    <p id='productName'>{product.name}</p>
                    <button id='productDetail-button'>Product Detail</button>
                    <button id='addToCart-button' onClick={() => handleCart(product)}>Add to Cart</button>
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
