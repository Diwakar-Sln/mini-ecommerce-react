import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export const Card = ({ title, image, price, id }) => {
    const {addToCart, cartItems} = useCart();
    const productInCart = cartItems.find((item) => item.id === id);
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : ""
    return <div style={{border:"1px solid red", padding:"10px"}}>
        <div>
            {title}
        </div>
        <div>
            <img src={image} alt="images" />
        </div>
        <div>
            ${price}
        </div>
        <div style={{marginTop:"20px",display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Link to={`products/${id}`}>View Details</Link>
            <button type="button" style={{cursor:"pointer"}} onClick={()=>addToCart(id)}>Add to Cart {productQuantityLabel}</button>
        </div>
    </div>
}