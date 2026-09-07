import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NavBar = () => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    }
    return (
        <div style={{ padding: "20px" }}>
            <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <li>
                    <Link to="/home"> <h3>Logo</h3> </Link>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <Link to="/home">Home</Link>
                    <Link to="/home/cart">Cart</Link>
                </li>
                {
                    !user ?
                        <li style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <Link to="/">Login</Link>
                            <Link to="/">SignUp</Link>
                        </li>
                        : <li style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <span>{user.email}</span>
                            <Link onClick={handleLogout} >Logout</Link>
                        </li>
                }
            </ul>
        </div>
    )
}

export default NavBar