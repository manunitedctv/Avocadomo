import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    useTheme
} from '@mui/material';
import ImageSlider from './ImageSlider';
import SakuraEffect from './SakuraEffect';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                pt: 8,
                pb: 6,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url(/wave-pattern.png)',
                    backgroundSize: '400px 400px',
                    opacity: 0.1,
                    animation: 'wave 15s linear infinite',
                },
                '@keyframes wave': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '400px 400px' },
                },
            }}
        >
            <SakuraEffect />

            {/* Floating Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '60px',
                    height: '60px',
                    background: 'url(/hiragana-a.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    animation: 'float 6s ease-in-out infinite',
                    zIndex: 2,
                    '@keyframes float': {
                        '0%, 100%': {
                            transform: 'translateY(0)',
                        },
                        '50%': {
                            transform: 'translateY(-20px)',
                        },
                    },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '50px',
                    height: '50px',
                    background: 'url(/hiragana-ka.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    animation: 'float 7s ease-in-out infinite',
                    zIndex: 2,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ position: 'relative' }}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', md: '3.75rem' },
                            background: 'linear-gradient(45deg, #568203, #7CB518)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                            animation: 'slideDown 1s ease-out',
                            '@keyframes slideDown': {
                                from: {
                                    opacity: 0,
                                    transform: 'translateY(-50px)',
                                },
                                to: {
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                },
                            },
                        }}
                    >
                        Learn Japanese as easy
                    </Typography>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', md: '3.75rem' },
                            background: 'linear-gradient(45deg, #E3B505, #FFD639)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                            mb: 4,
                            animation: 'slideUp 1s ease-out 0.3s both',
                            '@keyframes slideUp': {
                                from: {
                                    opacity: 0,
                                    transform: 'translateY(50px)',
                                },
                                to: {
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                },
                            },
                        }}
                    >
                        to eating avocado!
                    </Typography>

                    {/* Image Slider with fade in animation */}
                    <Box
                        sx={{
                            opacity: 0,
                            animation: 'fadeIn 1s ease-out 0.6s forwards',
                            '@keyframes fadeIn': {
                                to: {
                                    opacity: 1,
                                },
                            },
                        }}
                    >
                        <ImageSlider />
                    </Box>

                    {/* Buttons with hover effects */}
                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2,
                            opacity: 0,
                            animation: 'fadeIn 1s ease-out 0.9s forwards',
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                borderRadius: 2,
                                background: 'linear-gradient(45deg, #568203, #7CB518)',
                                boxShadow: '0 4px 15px rgba(86, 130, 3, 0.2)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(86, 130, 3, 0.3)',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                borderRadius: 2,
                                borderWidth: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderWidth: 2,
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 15px rgba(86, 130, 3, 0.1)',
                                },
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Box>
            </Container>

            {/* Decorative circles */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '5%',
                    left: '2%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(86, 130, 3, 0.1) 0%, rgba(86, 130, 3, 0) 70%)',
                    animation: 'pulse 4s ease-in-out infinite',
                    zIndex: 0,
                    '@keyframes pulse': {
                        '0%, 100%': {
                            transform: 'scale(1)',
                        },
                        '50%': {
                            transform: 'scale(1.1)',
                        },
                    },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(227, 181, 5, 0.1) 0%, rgba(227, 181, 5, 0) 70%)',
                    animation: 'pulse 4s ease-in-out infinite 1s',
                    zIndex: 0,
                }}
            />
        </Box>
    );
};

export default Hero; 