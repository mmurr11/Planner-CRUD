"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTodoList = exports.editTodo = exports.deleteTodo = exports.setCheck = exports.saveTodo = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    todoList: [],
    listStatus: { items: false, itemsDue: false, datePassed: false }
};
var todoSlice = toolkit_1.createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        saveTodo: function (state, action) {
            state.todoList.push(action.payload);
            state.listStatus.items = true;
            state.listStatus.itemsDue = true;
        },
        editTodo: function (state, action) {
            var i = state.todoList.findIndex(function (item) { return item.id === action.payload.id; });
            state.todoList[i].item = action.payload.name;
        },
        setCheck: function (state, action) {
            var i = state.todoList.findIndex(function (todo) { return todo.id === action.payload.id; });
            state.todoList[i].done = !state.todoList[i].done;
            state.listStatus.itemsDue = state.todoList.some(function (e) {
                return !e.done;
            });
        },
        deleteTodo: function (state, action) {
            var i = state.todoList.findIndex(function (todo) { return todo.id === action.payload.id; });
            if (state.todoList[i].length === 1) {
                state.listStatus.items = false;
            }
            var newList = state.todoList.filter(function (todo) { return todo.id !== action.payload.id; });
            state.todoList = newList;
            state.listStatus.itemsDue = state.todoList.some(function (e) {
                return !e.done;
            });
        },
    }
});
exports.saveTodo = (_a = todoSlice.actions, _a.saveTodo), exports.setCheck = _a.setCheck, exports.deleteTodo = _a.deleteTodo, exports.editTodo = _a.editTodo;
exports.selectTodoList = function (state) { return state.todos.todoList; };
exports.default = todoSlice.reducer;
