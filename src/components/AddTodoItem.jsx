import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo, takeTodos } from "../toolkitRedux/todoSlice";

import { Box, TextField, Button } from "@mui/material";


const AddTodoItem = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        if (text.trim().length) {
            dispatch(addNewTodo( text ))
            setText('')
        }
    }

    useEffect(() => {
        dispatch(takeTodos());
    },[dispatch]);

    return (
        <Box
            display="flex"
            position="relative"
            mx="10px"
        >
            <TextField
                focused
                fullWidth
                autoComplete="off"
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
                    "&.input:-internal-autofill-selected": {
                        backgroundColor: "inherit",
                    }
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
