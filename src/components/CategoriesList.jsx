import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { takeCategories } from "../toolkitRedux/categorySlice";


const CategoriesList = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(takeCategories());
    }, [dispatch]);

    const { error, categories, status } = useSelector((state) => state.categories)

    return (
        <Box>
            {categories.map((category) =>
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
                        {category.title}
                    </Typography>
                </Button>
            )
            }
        </Box >
    )
}

export default CategoriesList;