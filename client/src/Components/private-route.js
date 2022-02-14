import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('currentUser'));
    if( isAuthenticated?.auth ){
        return children;
    }
    else{
        return <Navigate to='/'/>
    }
}