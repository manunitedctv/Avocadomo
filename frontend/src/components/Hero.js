import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    useTheme
} from '@mui/material';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: { xs: 8, md: 12 },
                pb: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h1"
                                gutterBottom
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 800,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    mb: 2,
                                }}
                            >
                                井かるなるか
                                <br />
                                Learn Japanese as
                                <br />
                                easy to eating avocado!
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                                    mb: 4,
                                }}
                            >
                                Learn Japanese eating avocado!
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Yoolms
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Forum
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                textAlign: 'center',
                                '& img': {
                                    maxWidth: '100%',
                                    height: 'auto',
                                },
                            }}
                        >
                            <img
                                src="/avocado-hero.png"
                                alt="Avocado mascot"
                                style={{
                                    maxWidth: '80%',
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
                    zIndex: 0,
                    opacity: 0.1,
                    '& img': {
                        width: '400px',
                        height: 'auto',
                    },
                }}
            >
                <img src="/avocado-pattern.png" alt="" />
            </Box>
        </Box>
    );
};

export default Hero; 