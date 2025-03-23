import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    useScrollTrigger,
    useTheme,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MENU_ITEMS = [
    { label: 'Vocabulary', path: '/vocabulary' },
    { label: 'Kanji', path: '/kanji' },
    { label: 'Exercises', path: '/exercises' },
    { label: 'Forcise', path: '/forcise' },
    { label: 'Forum', path: '/forum' }
];

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            color="inherit"
            elevation={trigger ? 4 : 0}
            sx={{
                backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: trigger ? 'blur(8px)' : 'none',
                transition: 'all 0.3s',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                textDecoration: 'none'
                            }}
                        >
                            <img
                                src="/avocado-icon.png"
                                alt="Avocadomo"
                                style={{ height: 32, width: 'auto' }}
                            />
                            Avocadomo
                        </Typography>
                    </Box>

                    {isMobile ? (
                        <>
                            <IconButton
                                size="large"
                                edge="end"
                                color="primary"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                {MENU_ITEMS.map((item) => (
                                    <MenuItem
                                        key={item.label}
                                        onClick={handleClose}
                                        component={Link}
                                        to={item.path}
                                    >
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {MENU_ITEMS.map((item) => (
                                <Button
                                    key={item.label}
                                    color="inherit"
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header; 