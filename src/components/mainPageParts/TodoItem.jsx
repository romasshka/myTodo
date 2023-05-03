import { useState } from "react";
import { FormControl, InputLabel, ListItem, MenuItem, Select, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo, toggleStatus, toggleCategory } from "../../toolkitRedux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { useEffect } from "react";

const selectCategories = createSelector(
    state => state.categories.categories,
    categories => categories,
);

const TodoItem = ({ text, id, completed, categoryId }) => {

    const icon = completed ? < CheckCircleOutlineIcon
        sx={{
            color: "#228B22"
        }}
    /> : < RadioButtonUncheckedIcon
        sx={{
            color: "#228B22"
        }} />

    const listCategories = useSelector(selectCategories)
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState(categoryId);

    useEffect(() => {
        if (selectedCategory !== '') {
            dispatch(toggleCategory({ id, selectedCategory }));
        }
    }, [selectedCategory, id, dispatch]);
    
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    return (

        <ListItem
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr 7fr 3fr 1fr",

            }}
        >
            <Checkbox
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
                icon={icon}
                checkedIcon={icon}
            />
            <Typography
                variant="typography"
                sx={{
                    color: "white.default",
                    letterSpacing: 2,
                }} >
                {text}
            </Typography>

            <FormControl
                fullWidth
                variant="standard"
                sx={{
                    px: "10px",
                    borderRadius: "25px",
                    textAlign: "center",
                    ".MuiInputLabel-standard": {
                        display: "none"
                    },
                    bgcolor: listCategories.find(category => category.id === selectedCategory)?.color
                }}
                size="small"
            >
                <InputLabel sx={{ pl: "15px" }}>Age</InputLabel>
                <Select
                    value={selectedCategory}
                    onChange={handleChange}
                    disableUnderline
                    label="Age"
                    sx={{
                        color: "white.default",
                        'label+&': {
                            marginTop: 0,
                            py: "5px"
                        },
                        "& .MuiSelect-select:focus": {
                            background: "none",
                        }
                    }}
                >
                    {listCategories.map((category) =>
                        <MenuItem
                            key={category.id}
                            value={category.id}
                            sx={{
                                bgcolor: category.color
                            }}
                        >
                            {category.title}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>

            <DeleteIcon
                position="end"
                sx={{
                    cursor: "pointer",
                    color: "red.main",
                    opacity: 0.8,
                    margin: "auto",
                }}
                onClick={() => dispatch(deleteTodo(id))}
            />
        </ListItem >
    )
}

export default TodoItem;