import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return (
    isAuthenticated ?<Outlet/>:<Navigate to='/login'/>
  )
};

export default ProtectedRoute;
