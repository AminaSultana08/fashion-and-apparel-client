import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);
    if(loading){
        return <span className="loading loading-spinner text-primary text-center  flex items-center justify-center mx-auto h-96 loading-md"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;