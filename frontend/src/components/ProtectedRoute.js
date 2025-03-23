import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element: Component, requiredRoles, ...rest }) => {
    const { user, hasRole } = useAuth();
    const location = useLocation();

    if (!user) {
        // Redirect to login page if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRoles && !hasRole(requiredRoles)) {
        // Redirect to home page if not authorized
        return <Navigate to="/" replace />;
    }

    return <Component {...rest} />;
};

export default ProtectedRoute; 