import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const ROLES = {
    ADMIN: 'ADMIN',
    TEACHER: 'TEACHER',
    STUDENT: 'STUDENT',
    GUEST: 'GUEST'
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load user from localStorage on mount
    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');

                if (!token || !refreshToken) {
                    setLoading(false);
                    return;
                }

                // Validate token and get user data
                const response = await fetch('/api/auth/validate', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else if (response.status === 401) {
                    // Token expired, try refresh
                    await refreshAccessToken();
                }
            } catch (err) {
                console.error('Auth load error:', err);
                setError('Failed to load user session');
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const refreshAccessToken = async () => {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }

            const response = await fetch('/api/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (response.ok) {
                const { accessToken, user: userData } = await response.json();
                localStorage.setItem('accessToken', accessToken);
                setUser(userData);
                return true;
            }
            return false;
        } catch (err) {
            console.error('Token refresh error:', err);
            return false;
        }
    };

    const login = async (credentials) => {
        try {
            setError(null);
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok) {
                const { accessToken, refreshToken, user: userData } = data;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                setUser(userData);
                return { success: true };
            } else {
                setError(data.message || 'Login failed');
                return { success: false, error: data.message };
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred during login');
            return { success: false, error: 'Login failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
    };

    const hasRole = (requiredRoles) => {
        if (!user) return false;
        if (!requiredRoles || requiredRoles.length === 0) return true;
        return requiredRoles.includes(user.role);
    };

    const value = {
        user,
        loading,
        error,
        login,
        logout,
        hasRole,
        refreshAccessToken
    };

    if (loading) {
        // You can replace this with a loading spinner component
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 