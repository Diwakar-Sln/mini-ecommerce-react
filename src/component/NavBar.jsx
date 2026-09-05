import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{padding:"20px"}}>
        <ul style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <li>
                <Link to="/home"> <h3>Logo</h3> </Link>
            </li>
            <li style={{display:"flex", alignItems:"center", gap:"20px"}}>
                <Link to="/home">Home</Link>
                <Link to="/cart">Cart</Link>
            </li>
            <li style={{display:"flex", alignItems:"center", gap:"20px"}}>
                <Link to="/">Login</Link>
                <Link to="/">SignUp</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar