import React, { useContext } from 'react'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <main style={{padding:"30px"}}>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout