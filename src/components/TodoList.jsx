import React from "react";
import { Box } from "@mui/material";
import { useSelector } from 'react-redux';
import TodoItem from "./mainPageParts/TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    /*     console.log(todos) */

    return (
        <ul
        >
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            )}
        </ul>
    )
}

export default TodoList;