import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AsideCategory from './AsideCategory';

const BurgerMenu = () => {
    const [open, setOpen] = React.useState(false);

    console.log(open)

    const toggleDrawer = (isOpen) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(isOpen);
    };

    return (
        <>{open === false
            ?
            <IconButton
                onClick={toggleDrawer(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
            :
            <Box>
                <MenuOpenIcon/>
                <Drawer anchor='left' open={open} onClose={toggleDrawer(false)}>
                    <AsideCategory />
                </Drawer>
            </Box>
        }
        </>
    );
};

export default BurgerMenu;
