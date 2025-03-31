import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Định nghĩa breakpoints cho responsive design
const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
};

// Tạo theme function để hỗ trợ dark/light mode
const createAppTheme = (mode) => {
    let theme = createTheme({
        breakpoints,
        palette: {
            mode,
            primary: {
                main: '#4CAF50',
                light: '#81C784',
                dark: '#388E3C',
            },
            secondary: {
                main: '#FF9800',
                light: '#FFB74D',
                dark: '#F57C00',
            },
            background: {
                default: '#f5f5f5',
                paper: '#ffffff',
            },
            text: {
                primary: mode === 'light' ? '#2C3E50' : '#FFFFFF',
                secondary: mode === 'light' ? '#7F8C8D' : '#B3B3B3',
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontSize: '2.5rem',
                fontWeight: 500,
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 500,
            },
            h3: {
                fontSize: '1.75rem',
                fontWeight: 500,
            },
            h4: {
                fontSize: '1.5rem',
                fontWeight: 500,
            },
            h5: {
                fontSize: '1.25rem',
                fontWeight: 500,
            },
            h6: {
                fontSize: '1rem',
                fontWeight: 500,
            },
        },
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: 8,
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 8,
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        boxShadow: mode === 'light'
                            ? '0px 2px 8px rgba(0,0,0,0.1)'
                            : '0px 2px 8px rgba(0,0,0,0.3)',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
        },
    });

    // Make typography responsive
    theme = responsiveFontSizes(theme);

    return theme;
};

export default createAppTheme; 