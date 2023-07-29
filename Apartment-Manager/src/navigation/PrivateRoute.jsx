import React from "react"
import { Outlet, Navigate } from 'react-router-dom';
import useAuthentication from "./useAuthentication";


export const PrivateRoute = () => {
    const authToken = useAuthentication()
    return (
        authToken ? <Outlet/> : <Navigate to="/login"/>
    )
}