import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    useTheme,
    Grid
} from '@mui/material';

const CTA = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '2rem', md: '2.5rem' },
                                    mb: 2,
                                }}
                            >
                                Ready to Start Your Japanese Journey?
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    opacity: 0.9,
                                    mb: 4,
                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                }}
                            >
                                Join thousands of students who are already learning Japanese the Avocadomo way!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row', md: 'column' },
                                gap: 2,
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                component={RouterLink}
                                to="/signup"
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: 'background.paper',
                                    color: 'primary.main',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        backgroundColor: 'background.paper',
                                        opacity: 0.9,
                                    },
                                }}
                            >
                                Start Learning Now
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: 'background.paper',
                                    color: 'background.paper',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        borderColor: 'background.paper',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                View Courses
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: 'linear-gradient(to bottom right, transparent 49%, rgba(255,255,255,0.1) 50%)',
                }}
            />
        </Box>
    );
};

export default CTA; 