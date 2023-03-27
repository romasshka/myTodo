import React from "react";

const TodoItem = ({ id, text, completed, removeTodo, toggleTodoComplete }) => {

    return (
        <li>
            {/* <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoComplete(id)}
            /> */}
            <span
                style={{ marginRight: "49px",
                color: "black" }} >{text}</span>
            {/* <span
                onClick={() => removeTodo(id)}>
                &times;
            </span> */}
        </li>
    )
}

export default TodoItem;