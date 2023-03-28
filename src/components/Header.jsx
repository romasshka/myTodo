import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button, Grid, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';

export default function Header() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = React.useContext(ColorModeContext)


    return (
        <AppBar
            edge="center"
            position="static"
            sx={{
                bgcolor: "inherit",
                boxShadow: "none",
                backgroundImage: 'none',
                my: "65px",
            }}
        >
            <Toolbar>

                <Button
                    disableFocusRipple
                    variant="h1"
                    component="a"
                    sx={{
                        color: colors.yellow.light,
                        mx: "auto",
                    }}
                >
                    <Typography
                        variant='h1'
                        textAlign="center"
                    >
                        PERSONAL <br />
                        TASK MANAGER
                    </Typography>
                </Button>
                <Grid
                    onClick={colorMode.toggleColorMode}
                >
                    <IconButton
                        edge="end"
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        {
                            theme.palette.mode === 'dark'
                                ?
                                (<DarkModeIcon />)
                                :
                                (<LightModeIcon />)
                        }
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}