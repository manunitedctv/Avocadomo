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
                main: '#568203', // Màu xanh lá của vỏ bơ
                light: '#7CB518',
                dark: '#3F5E02',
                contrastText: '#fff',
            },
            secondary: {
                main: '#E3B505', // Màu vàng của ruột bơ
                light: '#FFD639',
                dark: '#B38600',
                contrastText: '#000',
            },
            background: {
                default: mode === 'light' ? '#FAFAFA' : '#121212',
                paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
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
                fontWeight: 600,
                '@media (min-width:600px)': {
                    fontSize: '3.5rem',
                },
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 600,
                '@media (min-width:600px)': {
                    fontSize: '3rem',
                },
            },
            h3: {
                fontSize: '1.75rem',
                fontWeight: 600,
                '@media (min-width:600px)': {
                    fontSize: '2.5rem',
                },
            },
            h4: {
                fontSize: '1.5rem',
                fontWeight: 500,
                '@media (min-width:600px)': {
                    fontSize: '2rem',
                },
            },
            h5: {
                fontSize: '1.25rem',
                fontWeight: 500,
                '@media (min-width:600px)': {
                    fontSize: '1.5rem',
                },
            },
            h6: {
                fontSize: '1rem',
                fontWeight: 500,
                '@media (min-width:600px)': {
                    fontSize: '1.25rem',
                },
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
                        fontWeight: 500,
                        padding: '8px 16px',
                    },
                    contained: {
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                        },
                    },
                },
                defaultProps: {
                    disableElevation: true,
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
                                borderWidth: 1,
                            },
                            '&:hover fieldset': {
                                borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)',
                                borderWidth: 1,
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#568203',
                                borderWidth: 1,
                            },
                            '& input': {
                                padding: '14px',
                            }
                        },
                        '& .MuiInputLabel-root': {
                            backgroundColor: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
                            padding: '0 4px',
                        },
                        '& .MuiInputLabel-outlined': {
                            transform: 'translate(14px, 16px) scale(1)',
                            '&.MuiInputLabel-shrink': {
                                transform: 'translate(14px, -9px) scale(0.75)',
                                backgroundColor: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
                            }
                        }
                    },
                },
                defaultProps: {
                    variant: 'outlined',
                    fullWidth: true,
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