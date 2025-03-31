import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProtectedRoute from '../components/ProtectedRoute';
import { ROLES } from '../contexts/AuthContext';

// Placeholder components
const VocabularyPage = () => <div>Vocabulary Page</div>;
const KanjiPage = () => <div>Kanji Page</div>;
const ExercisesPage = () => <div>Exercises Page</div>;
const ForcisePage = () => <div>Forcise Page</div>;
const ForumPage = () => <div>Forum Page</div>;
const LoginPage = () => <div>Login Page</div>;
const AdminDashboard = () => <div>Admin Dashboard</div>;
const TeacherDashboard = () => <div>Teacher Dashboard</div>;

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/vocabulary',
        element: <ProtectedRoute element={<div>Vocabulary Page</div>} requiredRoles={[ROLES.STUDENT, ROLES.TEACHER]} />
    },
    {
        path: '/kanji',
        element: <ProtectedRoute element={<div>Kanji Page</div>} requiredRoles={[ROLES.STUDENT, ROLES.TEACHER]} />
    },
    {
        path: '/exercises',
        element: <ProtectedRoute element={<div>Exercises Page</div>} requiredRoles={[ROLES.STUDENT, ROLES.TEACHER]} />
    },
    {
        path: '/forum',
        element: <ProtectedRoute element={<div>Forum Page</div>} requiredRoles={[ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]} />
    },
    {
        path: '/admin',
        element: <ProtectedRoute element={<div>Admin Dashboard</div>} requiredRoles={ROLES.ADMIN} />
    }
];

// Wrap protected routes with ProtectedRoute component
const processedRoutes = routes.map(route => ({
    ...route,
    element: route.protected
        ? (props) => (
            <ProtectedRoute
                element={route.element}
                requiredRoles={route.roles}
                {...props}
            />
        )
        : route.element
}));

export default processedRoutes; 