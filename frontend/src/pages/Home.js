import React from 'react';
import { Box, Container, ThemeProvider } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import theme from '../theme/theme';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Box component="main" sx={{ flexGrow: 1, mt: { xs: 7, md: 8 } }}>
                    <Container maxWidth="lg">
                        <Hero />
                        <Features />
                        <CTA />
                    </Container>
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default Home; 