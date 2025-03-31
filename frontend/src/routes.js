import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

export const routes = [
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
        element: <div>Vocabulary Page</div>,
        protected: true,
        roles: ['STUDENT', 'TEACHER', 'ADMIN']
    },
    {
        path: '/kanji',
        element: <div>Kanji Page</div>,
        protected: true,
        roles: ['STUDENT', 'TEACHER', 'ADMIN']
    },
    {
        path: '/exercises',
        element: <div>Exercises Page</div>,
        protected: true,
        roles: ['STUDENT', 'TEACHER', 'ADMIN']
    },
    {
        path: '/forcise',
        element: <div>Forcise Page</div>,
        protected: true,
        roles: ['STUDENT', 'TEACHER', 'ADMIN']
    },
    {
        path: '/forum',
        element: <div>Forum Page</div>,
        protected: true,
        roles: ['STUDENT', 'TEACHER', 'ADMIN']
    }
]; 