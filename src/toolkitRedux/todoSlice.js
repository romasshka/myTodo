import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const takeTodos = createAsyncThunk(
    'todos/takeTodos',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3001/todoItems?_limit=9')
            response.data.reverse()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    });

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async (text, { rejectWithValue, dispatch }) => {
        try {
            const todo = {
                text: text,
                completed: false,
                categoryId: '',
            }
            const response = await axios.post('http://localhost:3001/todoItems', todo)

            const data = await response.data
            dispatch(addTodo(data))
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.delete(`http://localhost:3001/todoItems/${id}`)
            dispatch(removeTodo({ id }))
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async (id, { rejectWithValue, dispatch, getState }) => {
        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await axios.patch(`http://localhost:3001/todoItems/${id}`, { completed: !todo.completed })
            dispatch(toggleTodoComplete({ id }))
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const toggleCategory = createAsyncThunk(
    'todos/toggleCategory',
    async ({ id, selectedCategory }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`http://localhost:3001/todoItems/${id}`, { categoryId: selectedCategory })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    todos: [],
    status: null,
    error: null,
}


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.unshift(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(takeTodos.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(takeTodos.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.todos = action.payload;
            })
            .addCase(takeTodos.rejected, (state, action) => {
                state.status = false
                state.error = action.payload
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
            .addCase(toggleStatus.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;