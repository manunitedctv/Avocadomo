import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element, requiredRoles = [] }) => {
    const { user, isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        // Chưa đăng nhập, chuyển hướng về trang login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRoles.length > 0 && !requiredRoles.includes(user?.role)) {
        // Không có quyền truy cập, chuyển hướng về trang chủ
        return <Navigate to="/" replace />;
    }

    return element;
};

export default ProtectedRoute; 