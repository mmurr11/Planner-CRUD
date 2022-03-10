import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
    listStatus: {items: false, itemsDue: false, datePassed: false}
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        saveTodo: (state, action) => {

            state.todoList.push(action.payload)
            state.listStatus.items = true
            state.listStatus.itemsDue = true
            
        },

        editTodo: (state, action) => {
            
            const i = state.todoList.findIndex((item) => item.id === action.payload.id)           
            state.todoList[i].item = action.payload.name

        },

        setCheck: (state, action) => {

            const i = state.todoList.findIndex((todo) => todo.id === action.payload.id)

            state.todoList[i].done = !state.todoList[i].done

            state.listStatus.itemsDue = state.todoList.some((e) => {
                return !e.done;
            });

        },

        deleteTodo: (state, action) => {

            const i = state.todoList.findIndex((todo) => todo.id === action.payload.id)
            if (state.todoList[i].length === 1) {
                state.listStatus.items = false
            }
         
            const newList = state.todoList.filter((todo) => todo.id !== action.payload.id)
            state.todoList = newList

            state.listStatus.itemsDue = state.todoList.some((e) => {
                return !e.done;
            });

        },
        
    }
});

export const { saveTodo, setCheck, deleteTodo, editTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer