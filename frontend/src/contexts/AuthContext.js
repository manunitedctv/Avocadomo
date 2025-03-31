import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const ROLES = {
    ADMIN: 'ADMIN',
    TEACHER: 'TEACHER',
    STUDENT: 'STUDENT',
    GUEST: 'GUEST'
};

// Cấu hình axios
axios.defaults.baseURL = 'http://localhost:8081/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            validateToken(token);
        } else {
            setLoading(false);
        }
    }, []);

    const validateToken = async (token) => {
        try {
            const response = await axios.get('/auth/validate', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
        } catch (error) {
            localStorage.removeItem('token');
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', {
                email,
                password
            });
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            setUser(user);
            return user;
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Đăng nhập thất bại');
        }
    };

    const signup = async (email, password, userData) => {
        try {
            console.log('Signup data:', { email, password, ...userData });
            const response = await axios.post('/auth/register', {
                email,
                password,
                firstName: userData.firstName,
                lastName: userData.lastName,
                role: ROLES.STUDENT // Mặc định role là STUDENT khi đăng ký
            });
            console.log('Signup response:', response.data);
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            setUser(user);
            return user;
        } catch (error) {
            console.error('Signup error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Đăng ký thất bại');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const hasRole = (roles) => {
        if (!user) return false;
        return roles.includes(user.role);
    };

    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        hasRole
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}; 