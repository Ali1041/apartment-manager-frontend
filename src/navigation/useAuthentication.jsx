import React from 'react'
import { APIService } from '../Services/APIService';


const useAuthentication = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    

    React.useEffect(async () => {
        const apiService = new APIService();
        try {
            await apiService.get("/api/auth");
            setIsAuthenticated(true)
        }
        catch (error) {
            console.log(error)
        }
    })

    return isAuthenticated
}

export default useAuthentication;