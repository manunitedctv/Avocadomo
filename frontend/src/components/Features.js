import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    useTheme
} from '@mui/material';

const features = [
    {
        title: 'Vocabulary',
        description: 'Learn essential Japanese vocabulary with our interactive flashcards and spaced repetition system.',
        icon: '📚'
    },
    {
        title: 'Kanji',
        description: 'Master Japanese characters through our structured learning path and memory techniques.',
        icon: '✍️'
    },
    {
        title: 'Exercises',
        description: "Practice what you've learned with our comprehensive exercise sets and quizzes.",
        icon: '📝'
    },
    {
        title: 'Forcise',
        description: 'Strengthen your skills with focused practice sessions and personalized feedback.',
        icon: '💪'
    },
    {
        title: 'Forum',
        description: 'Join our community to practice with other learners and get help from native speakers.',
        icon: '💬'
    }
];

const FeatureCard = ({ title, description, icon }) => {
    const theme = useTheme();

    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                backgroundColor: 'background.paper',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                },
            }}
        >
            <CardContent sx={{ p: 4 }}>
                <Box
                    sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        backgroundColor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        fontSize: '2rem',
                    }}
                >
                    {icon}
                </Box>
                <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

const Features = () => {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 2,
                        }}
                    >
                        Why Choose Avocadomo?
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '800px',
                            mx: 'auto',
                        }}
                    >
                        Our comprehensive learning system makes Japanese language acquisition natural and enjoyable
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <FeatureCard {...feature} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Features; 