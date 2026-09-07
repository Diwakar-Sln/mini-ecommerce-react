import React, { useContext } from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const MainLayout = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <NavBar />
            <h1>{user?.email}</h1>
            <main style={{padding:"30px"}}>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout