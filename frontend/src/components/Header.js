import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Menu,
    MenuItem,
    IconButton,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleClose();
        navigate('/');
    };

    const handleProfile = () => {
        handleClose();
        navigate('/profile');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#4CAF50' }}>
            <Toolbar>
                <Typography
                    component={RouterLink}
                    to="/"
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 'bold',
                    }}
                >
                    Avocadomo
                </Typography>

                {user ? (
                    <>
                        <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
                            <Button
                                color="inherit"
                                component={RouterLink}
                                to="/vocabulary"
                            >
                                Từ vựng
                            </Button>
                            <Button
                                color="inherit"
                                component={RouterLink}
                                to="/kanji"
                            >
                                Kanji
                            </Button>
                            <Button
                                color="inherit"
                                component={RouterLink}
                                to="/exercises"
                            >
                                Bài tập
                            </Button>
                            <Button
                                color="inherit"
                                component={RouterLink}
                                to="/forum"
                            >
                                Diễn đàn
                            </Button>
                        </Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleProfile}>Hồ sơ</MenuItem>
                            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            color="inherit"
                            component={RouterLink}
                            to="/login"
                        >
                            Đăng nhập
                        </Button>
                        <Button
                            color="inherit"
                            component={RouterLink}
                            to="/signup"
                        >
                            Đăng ký
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header; 