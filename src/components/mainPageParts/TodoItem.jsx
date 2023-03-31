import React, { useState } from "react";
import { FormControl, InputLabel, ListItem, MenuItem, Select, Typography, styled } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Padding } from "@mui/icons-material";



const TodoItem = ({ id, text, completed, removeTodo, toggleTodoComplete }) => {


    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <ListItem
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr 7fr 3fr 1fr",

            }}
        >
            <Checkbox
                icon=
                {<RadioButtonUncheckedIcon
                    sx={{
                        color: "#228B22"
                    }} />}
                checkedIcon={<CheckCircleOutlineIcon
                    sx={{
                        color: "#228B22"
                    }}
                />}
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
                    bgcolor: 'yellow.main',
                    borderRadius: "25px",
                    textAlign: "center",
                    ".MuiInputLabel-standard": {
                        display: "none"
                    }
                }}
                size="small">
                <InputLabel
                    sx={{
                        pl: "15px",
                    }}
                >
                    Age
                </InputLabel>
                <Select
                    disableUnderline
                    value={age}
                    label="Age"
                    onChange={handleChange}
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
                    <MenuItem

                        value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem
                        value={10}>
                        Ten
                    </MenuItem>
                    <MenuItem
                        value={20}>
                        Twenty
                    </MenuItem>
                    {/* <MenuItem
                        value={30}>
                        Thirty
                    </MenuItem>  */}
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
                onClick={() => removeTodo(id)}
            />
        </ListItem >
    )
}

export default TodoItem;