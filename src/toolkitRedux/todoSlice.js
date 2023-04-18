import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const takeTodos = createAsyncThunk(
    'todos/takeTodos',
    async () => {
        try {
            const res = await axios.get('http://localhost:3001/todoItems')
            return res.data
        } catch (err) {
            console.log(err)
        }
    })


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
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
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
    }
})

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;