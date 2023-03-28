import React from "react";
import Header from "../components/Header"
import { Box, Container, Grid, } from "@mui/material";
import { styled } from '@mui/material/styles';
import TodoList from "../components/TodoList";
import AsideCategory from "../components/AsideCategories";
import AddTodoItem from "../components/AddTodoItem.jsx";


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
                    >
                        <AddTodoItem
                        />
                        <TodoList />
                    </Item>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Main;