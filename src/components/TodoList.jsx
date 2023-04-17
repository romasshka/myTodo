import React from "react";
import { List } from "@mui/material";
import { useSelector } from 'react-redux';
import TodoItem from "./mainPageParts/TodoItem";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <List>
            {todos.map((todo) =>
                <TodoItem
                    todo={todo}
                    
                    key={todo.id}
                    {...todo}
                />
            )}
        </List>
    )
}

export default TodoList;