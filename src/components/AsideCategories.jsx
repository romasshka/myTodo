import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import Category from "./Category";
import { MuiColorInput } from "mui-color-input";

const AsideCategory = () => {

    const [open, setOpen] = useState(false);
    const [nameCategory, setNameCategory] = useState('');
    const [color, setColor] = useState("#336699");

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleColorChange = (color) => {
        setColor(color)
        console.log(color)
    }

    return (
        <Box
            paddingY="1rem"
        >
            <Typography
                align="center"
                variant="h3"
                sx={{
                    mb: "30px",
                    color: "white.default",
                    overflow: "hidden",

                    '&::before , &::after': {
                        content: '""', // "''" will also work.
                        display: "inline-block",
                        verticalAlign: "middle",
                        height: "1px",
                        border: "solid",
                        borderColor: "white.dark",
                        borderWidth: "0px 50px",
                        overflow: "hidden",
                    },
                    '&::before': {
                        ml: "-100%",
                        mr: "13px",

                    },
                    '&::after': {
                        mr: "-100%",
                        ml: "13px",
                    }

                }}
            >
                Categories
            </Typography>
            <Category />

            <Button
                onClick={handleClickOpen}

                sx={{
                    color: "white.default",
                    backgroundColor: "secondary.main",
                    borderRadius: "15px",
                    "&:hover": {
                        backgroundColor: "secondary.main",
                    }
                }}
            >
                <Typography
                    component="p"
                    variant="h3"
                >
                    Create Category
                </Typography>
            </Button>

            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                sx={{
                    backgroundColor: "#0000008c",

                    ".MuiDialog-paper": {
                        backgroundColor: "primary.main",
                        borderRadius: "10px",
                        border: "2px solid",
                        borderColor: "white.default",
                    },
                }}
            >
                <DialogTitle
                    alignSelf="center"
                    variant="h2"
                    id="form-dialog-title"
                    color="white.default"
                    lineHeight="27px"
                >
                    Create Category
                </DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name for new category"
                        type="text"
                        variant="filled"
                        fullWidth
                        value={nameCategory}
                        sx={{
                            mb: "10px",
                            borderRadius: "10px",
                            bgcolor: "white.default",
                            ".MuiInputLabel-root, .MuiInputLabel-root.Mui-focused": {
                                color: "grey.main",
                            },
                            ".MuiFilledInput-root:after, .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before, .MuiFilledInput-root:before": {
                                borderBottom: "none"
                            },
                        }}
                    />
                    <MuiColorInput

                        margin="dense"
                        label="Enter the value of the new category"
                        variant="standard"
                        fullWidth
                        onChange={handleColorChange}
                        value={color}
                        isAlphaHidden
                        format="hex"

                    >
                        Enter Color
                    </MuiColorInput>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="error"
                        color="secondary.main"
                        sx={{
                            mx: "auto",
                            color: "secondary.main",

                        }}
                    >
                        Add Category
                    </Button>
                    <Button
                        variant="error"
                        onClick={handleClose}
                        sx={{
                            color: "secondary.main",
                            mr: "13px",
                        }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

        </Box >
    )
}

export default AsideCategory;