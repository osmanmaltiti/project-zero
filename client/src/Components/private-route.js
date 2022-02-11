import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const auth = useSelector(state => state.sign.signIn);
    
    if(auth?.isAuthenticated){
        return children;
    }
    else{
        return <Navigate to='/'/>
    }
}