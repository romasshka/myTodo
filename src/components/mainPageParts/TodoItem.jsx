import { useState, useEffect } from "react";
import { FormControl, InputLabel, ListItem, MenuItem, Select, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeTodo, toggleTodoComplete } from "../../toolkitRedux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

const selectCategories = createSelector(
    state => state.categories.categories,
    categories => categories,
);

const TodoItem = ({ text, id, completed }) => {

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

    const [selectedCategory, setSelectedCategory] = useState('');

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
                onChange={() => dispatch(toggleTodoComplete({ id }))}
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
                            {category.name}
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
                onClick={() => dispatch(removeTodo({ id }))}
            />
        </ListItem >
    )
}

export default TodoItem;