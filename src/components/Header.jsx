import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button, Grid, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';
import BurgerMenu from './BurgerMenu';

const menuCategories = (theme) => ({
    [theme.breakpoints.down('md')]: {
        display: "flex",
    }
})

export default function Header() {


    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)



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

                <Box
                    display="none"
                    sx={menuCategories}>
                    <BurgerMenu/>
                </Box>

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