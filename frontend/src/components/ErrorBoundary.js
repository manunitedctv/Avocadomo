import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log the error to an error reporting service
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        padding: 3,
                        textAlign: 'center',
                    }}
                >
                    <ErrorOutlineIcon sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
                    <Typography variant="h4" gutterBottom>
                        Oops! Something went wrong
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        We're sorry for the inconvenience. Please try again later.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleReset}
                    >
                        Try Again
                    </Button>
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <Box sx={{ mt: 4, textAlign: 'left' }}>
                            <Typography variant="h6" gutterBottom>
                                Error Details:
                            </Typography>
                            <pre style={{
                                overflow: 'auto',
                                padding: '1rem',
                                backgroundColor: '#f5f5f5',
                                borderRadius: '4px'
                            }}>
                                {this.state.error.toString()}
                                {'\n'}
                                {this.state.errorInfo.componentStack}
                            </pre>
                        </Box>
                    )}
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 