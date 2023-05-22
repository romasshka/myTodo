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

const breakpoints = (theme) => ({
    [theme.breakpoints.down('md')]: {
        display: "none",
    }

})


const ffff = (theme) => ({
    [theme.breakpoints.down('md')]: {
        flexBasis: "100%",
        maxWidth: "100%"
    }

})



const Main = () => {

    return (
        <Container>
            <Header />
            <Grid
                container
                spacing={1}
                columns={12}>

                <Grid
                    sx={breakpoints}
                    item
                    xs={3}
                >
                    <Item>
                        <AsideCategory />
                    </Item>
                </Grid>
                <Grid
                sx={ffff}
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