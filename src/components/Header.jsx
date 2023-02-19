import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import { Button } from '@mui/material';

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

    return (
        <Box>
            <AppBar
                position="static"
                color='inherit'
            >
                <Toolbar>

                    <Button
                        disabled
                        variant="h6"
                        component="a">
                        <Typography>
                            PERSONAL <br />
                            TASK MANAGER

                        </Typography>
                    </Button>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <NightlightRoundedIcon
                            color='primary'
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}