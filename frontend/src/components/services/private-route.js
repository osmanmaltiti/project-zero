import React from 'react';
import auth from './Auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
if(auth.isAuthenticated){
    return children;
}
else{
    return <Navigate to='/'/>
    }
}