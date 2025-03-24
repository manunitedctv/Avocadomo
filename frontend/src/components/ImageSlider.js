import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Fade } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const slides = [
    {
        url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3',
        title: '日本文化',
        subtitle: 'Japanese Culture',
        description: 'Discover the beauty of traditional Japanese culture',
    },
    {
        url: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3',
        title: '東京',
        subtitle: 'Tokyo Street',
        description: 'Experience the vibrant streets of Tokyo',
    },
    {
        url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3',
        title: '和食',
        subtitle: 'Japanese Food',
        description: 'Taste the authentic Japanese cuisine',
    },
    {
        url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3',
        title: '富士山',
        subtitle: 'Mount Fuji',
        description: 'Visit the iconic symbol of Japan',
    },
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(true);

    const goToPrevious = () => {
        setShowText(false);
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setTimeout(() => setShowText(true), 100);
    };

    const goToNext = () => {
        setShowText(false);
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setTimeout(() => setShowText(true), 100);
    };

    const goToSlide = (slideIndex) => {
        setShowText(false);
        setCurrentIndex(slideIndex);
        setTimeout(() => setShowText(true), 100);
    };

    // Auto slide effect
    useEffect(() => {
        const slideInterval = setInterval(goToNext, 5000); // Change slide every 5 seconds
        return () => clearInterval(slideInterval);
    }, [currentIndex]);

    return (
        <Box
            sx={{
                position: 'relative',
                height: '500px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginY: 4,
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                },
            }}
        >
            {/* Cherry Blossoms Decoration */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -50,
                    left: -50,
                    width: '200px',
                    height: '200px',
                    backgroundImage: 'url(/sakura-corner.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.6,
                    transform: 'rotate(0deg)',
                    zIndex: 2,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    width: '200px',
                    height: '200px',
                    backgroundImage: 'url(/sakura-corner.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.6,
                    transform: 'rotate(180deg)',
                    zIndex: 2,
                }}
            />

            {/* Main Image */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 4,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    transition: 'all 0.5s ease-in-out',
                    transform: 'scale(1.02)',
                    filter: 'brightness(0.9)',
                }}
            />

            {/* Slide Content */}
            <Fade in={showText} timeout={500}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        zIndex: 2,
                        width: '100%',
                        padding: 3,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            mb: 1,
                        }}
                    >
                        {slides[currentIndex].title}
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            fontWeight: 500,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            mb: 2,
                        }}
                    >
                        {slides[currentIndex].subtitle}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        {slides[currentIndex].description}
                    </Typography>
                </Box>
            </Fade>

            {/* Navigation Arrows */}
            <IconButton
                onClick={goToPrevious}
                sx={{
                    position: 'absolute',
                    left: 16,
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 2,
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <KeyboardArrowLeft sx={{ fontSize: 40 }} />
            </IconButton>

            <IconButton
                onClick={goToNext}
                sx={{
                    position: 'absolute',
                    right: 16,
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 2,
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <KeyboardArrowRight sx={{ fontSize: 40 }} />
            </IconButton>

            {/* Dots Navigation */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 24,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    width: '100%',
                    zIndex: 2,
                }}
            >
                {slides.map((slide, slideIndex) => (
                    <Box
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        sx={{
                            width: currentIndex === slideIndex ? 16 : 12,
                            height: currentIndex === slideIndex ? 16 : 12,
                            borderRadius: '50%',
                            backgroundColor: currentIndex === slideIndex ? 'primary.main' : 'white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.2)',
                                backgroundColor: currentIndex === slideIndex ? 'primary.light' : 'rgba(255,255,255,0.8)',
                            },
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ImageSlider; 