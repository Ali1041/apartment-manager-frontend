import React from "react"
import { Outlet, Navigate } from 'react-router-dom';


export const PrivateRoute = () => {
    // Sperate file for auth in Private route
    // Private Route API call for authentication backend 
    // get the token from local or session storage
    const authToken = localStorage.getItem("authToken")
    return (
        authToken ? <Outlet/> : <Navigate to="/login"/>
    )
}