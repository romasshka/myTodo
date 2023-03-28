import { ListItem } from "@mui/material";
import React from "react";

const TodoItem = ({ id, text, completed, removeTodo, toggleTodoComplete }) => {

    return (
        <ListItem>
            { <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoComplete(id)}
            /> }
            <span
                style={{ marginRight: "49px",
                color: "black" }} >{text}</span>
            { <span
                onClick={() => removeTodo(id)}>
                &times;
            </span> }
        </ListItem>
    )
}

export default TodoItem;