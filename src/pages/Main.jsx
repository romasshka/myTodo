import React from "react";
import Header from "../components/Header"
import { Box, Container, Grid, } from "@mui/material";
import { styled } from '@mui/material/styles';
import TodoList from "../components/TodoList";
import AsideCategory from "../components/AsideCategory";
import AddTodoItem from "../components/AddTodoItem.jsx";


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "10px 0",
    textAlign: 'center',
    borderRadius: "10px",
}));

const Main = () => {

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