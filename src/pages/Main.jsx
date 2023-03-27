import React, { useState } from "react";
import Header from "../components/Header"
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import TodoList from "../components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../toolkitRedux/todoSlice";
import AsideCategory from "../components/AsideCategories";


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "10px 0",
    textAlign: 'center',
    borderRadius: "10px",
}));

const Main = () => {


    const toggleTodoComplete = (todoId) => {
        /* setTodos(
            todoSlice.map(
                todo => {
                    if (todo.id !== todoId) return todo;

                    return {
                        ...todo,
                        competed: !todo.competed,
                    }
                }
            )
        ) */
    }

    const removeTodo = (todoId) => {
        //  SecurityUpdateGoodSharp(todos.filter(todo => todo.id !== todoId))
    }

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => dispatch(addTodo(text))

    return (
        <Container>
            <Header />
            <Grid
                container
                spacing={1}
                columns={12}>

                <Grid
                    item
                    xs={3}
                /*                  sx={{
                                     '.css-mhc70k-MuiGrid-root>.MuiGrid-item': {
                                         pl: "0px",
                                     },
                                 }} */
                >
                    <Item>
                        <AsideCategory />
                    </Item>
                </Grid>
                <Grid
                    item
                    xs={9}

                >
                    <Item
                    /* sx={{
                        bgcolor: "primary.main",
                        borderRadius: "10px",
                        p: "0.8rem",
            }} */
                    >
                        <label
                        >
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <Button
                                onClick={addTask}>
                                Add Todo
                            </Button>
                        </label>
                        <TodoList />
                    </Item>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Main;