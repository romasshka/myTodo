import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

const selectCategories = createSelector(
    state => state.categories.categories,
    categories => categories,
)

const CategoriesList = () => {

    const listCategories = useSelector(selectCategories)
    return (
        <Box>
            {listCategories.map((category) =>
                <Button
                    key={category.id}
                    sx={{
                        width: "200px",
                        display: "block",
                        margin: "0 auto 5px",
                        borderRadius: "10px",
                        backgroundColor: category.color,
                        "&:hover": {
                            backgroundColor: category.color,
                        }
                    }}
                >
                    <Typography
                        px="5px"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        component="p"
                        variant="typography"
                        color="white.default"
                    >
                        {category.name}
                    </Typography>
                </Button>
            )
            }
        </Box >
    )
}

export default CategoriesList;