import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dateStatus: [ 
        {
            date: new Date().getTime(),
            status: {
                todoList: [],
                listStatus: {items: false, itemsDue: false}
            }
        }
    ],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        saveTodo: (state, action) => {

            state.dateStatus[0].status.todoList.push(action.payload)
            state.dateStatus[0].status.listStatus.items = true
            state.dateStatus[0].status.listStatus.itemsDue = true
            
        },

        editTodo: (state, action) => {
            
            const i = state.dateStatus[0].status.todoList.findIndex((todo) => todo.id === action.payload.id)
            state.dateStatus[0].status.todoList[i].item = action.payload.name

        },

        setCheck: (state, action) => {

            const i = state.dateStatus[0].status.todoList.findIndex((todo) => todo.id === action.payload.id)
            state.dateStatus[0].status.todoList[i].done = !state.dateStatus[0].status.todoList[i].done

            state.dateStatus[0].status.listStatus.itemsDue = state.dateStatus[0].status.todoList.some((e) => {
                return !e.done;
            });

        },

        deleteTodo: (state, action) => {

            if (state.dateStatus[0].status.todoList.length === 1) {
                state.dateStatus[0].status.listStatus.items = false
            }
         
            const newList = state.dateStatus[0].status.todoList.filter((todo) => todo.id !== action.payload.id)
            state.dateStatus[0].status.todoList = newList

            state.dateStatus[0].status.listStatus.itemsDue = state.dateStatus[0].status.todoList.some((e) => {
                return !e.done;
            });

        },
        
        setToday: (state, action) => {

            state.dateStatus.status.todoList.push(action.payload)

        }

    }
});

export const { saveTodo, setCheck, deleteTodo, editTodo, setToday } = todoSlice.actions

export const selectTodoList = state => state.todos.dateStatus[0].status.todoList

export const selectDateStatus = state => state.todos.dateStatus

export default todoSlice.reducer