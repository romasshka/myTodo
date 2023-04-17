import {  configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"
import categorySlice from "./categorySlice";

export default configureStore({
    reducer: {
        todos: todoReducer,
        categories: categorySlice,
    },
})