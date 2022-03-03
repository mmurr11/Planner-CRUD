import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
    listStatus: [{items: false, itemsDue: false}]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
            state.listStatus[0].items = true
            state.listStatus[0].itemsDue = true
        },

        editTodo: (state, action) => {
            
            for (let i = state.todoList.length - 1; i >= 0; --i) {
                if (state.todoList[i].id === action.payload) {
                    state.todoList.splice(i,1);
                }
            }

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

            state.listStatus[0].itemsDue = state.todoList.some((e) => {
                return !e.done;
            });

        },

        deleteTodo: (state, action) => {

            if (state.todoList.length === 1) {
                state.listStatus[0].items = false
            }
            
            for (let i = state.todoList.length - 1; i >= 0; --i) {
                if (state.todoList[i].id === action.payload) {
                    state.todoList.splice(i,1);
                }
            }

            state.listStatus[0].itemsDue = state.todoList.some((e) => {
                return !e.done;
            });

        }
        

    }
});

// set { "datePassed": bool, "items": bool, "itemsDue": bool } then export

export const { saveTodo, setCheck, deleteTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer