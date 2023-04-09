import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
    },
    reducers: {
        addCategory(state, action) {
            state.categories.push({
                id: state.categories.length + 1,
                name: action.payload.nameCategory,
                color: action.payload.color,
            })
        }
    }
})

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;