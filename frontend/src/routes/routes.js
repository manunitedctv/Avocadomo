import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
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
        element: Home,
    },
    {
        path: '/login',
        element: Login,
    },
    {
        path: '/vocabulary',
        element: VocabularyPage,
        protected: true,
        roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]
    },
    {
        path: '/kanji',
        element: KanjiPage,
        protected: true,
        roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]
    },
    {
        path: '/exercises',
        element: ExercisesPage,
        protected: true,
        roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]
    },
    {
        path: '/forcise',
        element: ForcisePage,
        protected: true,
        roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]
    },
    {
        path: '/forum',
        element: ForumPage,
        protected: true,
        roles: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN]
    },
    {
        path: '/admin',
        element: AdminDashboard,
        protected: true,
        roles: [ROLES.ADMIN]
    },
    {
        path: '/teacher',
        element: TeacherDashboard,
        protected: true,
        roles: [ROLES.TEACHER, ROLES.ADMIN]
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