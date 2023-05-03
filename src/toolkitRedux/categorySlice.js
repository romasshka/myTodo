import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const takeCategories = createAsyncThunk(
    'categories/takeCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3001/categories')
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addNewCategory = createAsyncThunk(
    'categories/addNewCategory',
    async ({ nameCategory, color }, { rejectWithValue, dispatch }) => {
        try {
            const category = {
                title: nameCategory,
                color: color,
            }
            const response = await axios.post('http://localhost:3001/categories', category)

            const data = await response.data
            dispatch(addCategory(data))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    categories: [],
    status: null,
    error: null,
}

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory(state, action) {
            console.log(state)
            state.categories.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(takeCategories.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(takeCategories.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.categories = action.payload;
            })
            .addCase(takeCategories.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
            .addCase(addNewCategory.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;