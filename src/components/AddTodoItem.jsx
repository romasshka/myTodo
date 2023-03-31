import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { addTodo } from "../toolkitRedux/todoSlice";

import { Box, TextField, Button } from "@mui/material";


{/*    <Paper
            value={text}
            onChange={(e) => setText(e.target.value)}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
                onClick={addTask}
                >
                <SearchIcon />
            </IconButton>
        </ Paper >*/}
const AddTodoItem = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => dispatch(addTodo(text))

    return (
        <Box
            display="flex"
            position="relative"
            mx="10px"
        >
            <TextField
                focused
                fullWidth
                id="outlined-basic"
                label="Add new task"
                variant="standard"
                value={text}
                onChange={(e) => setText(e.target.value)}

                sx={{
                    ".MuiInput-root": {
                        pl: '5px'
                    },
                    ".MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
                        borderBottom: "1px solid rgba(0, 0, 0, 0.87)",
                    },
                    ".MuiTextField-root": {
                        color: "white.dark",
                    },
                    ".MuiInput-root:before": {
                        bottom: "auto"
                    },
                    ".MuiInputBase-root": {
                        borderRadius: "10px"
                    },
                    ".MuiInputLabel-root.Mui-focused": {
                        color: "#000000",
                        opacity: 0.6,
                    },
                }}
            />
            <Button
                color="pageColor"
                onClick={addTask}
                sx={{
                    position: "absolute",
                    right: "16px",

                }}
            >
                Add Todo
            </Button>
        </ Box >

    )
}

export default AddTodoItem;