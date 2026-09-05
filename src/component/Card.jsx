import { Link } from "react-router-dom"

export const Card = ({ title, image, price }) => {
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
            <Link to="">View Details</Link>
            <button type="button" style={{cursor:"pointer"}}>Add to Cart</button>
        </div>
    </div>
}