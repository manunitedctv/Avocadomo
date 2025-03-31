import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createAppTheme from './theme';
import { routes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            {routes.map((route, index) => {
              const { path, element, protected: isProtected, roles } = route;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    isProtected ? (
                      <ProtectedRoute element={element} requiredRoles={roles} />
                    ) : (
                      element
                    )
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
