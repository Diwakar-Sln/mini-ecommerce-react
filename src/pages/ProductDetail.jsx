import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchProductsById from '../hooks/useFetchProductsById';
import { productApi } from '../services/productApi';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, isLoading, error } = useFetchProductsById(productApi, id);
    const { addToCart, cartItems } = useCart();
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    if (!products) {
        return <p>No products found</p>
    }
    const productInCart = cartItems.find((item) => item.id === Number(id));
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : ""
    return (
        <div>
            <h1>ProductDetail {id}</h1>
            <div>
                <div>{products?.title}</div>
                <div><img src={products?.thumbnail} alt={products.title} /></div>
                <div>{products?.description}</div>
                <div>
                    <span>{products?.price}</span>
                    <button onClick={()=>addToCart(products.id)}>Add to Cart  {productQuantityLabel}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail