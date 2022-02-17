import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },

        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
            })
        },

        deleteTodo: (state, action) => {
            
            for (let i = state.todoList.length - 1; i >= 0; --i) {
                if (state.todoList[i].id == action.payload) {
                    state.todoList.splice(i,1);
                }
            }

        }
        

    }
});


export const { saveTodo, setCheck, deleteTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer