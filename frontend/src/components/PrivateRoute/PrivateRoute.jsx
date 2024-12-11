import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ roleRequired }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); 

  if (!token) {
    return <Navigate to="/login" />; 
  }

  if (roleRequired && userRole !== roleRequired) {
    return <Navigate to="/" />; 
  }

  return <Outlet />;
};

export default PrivateRoute;

