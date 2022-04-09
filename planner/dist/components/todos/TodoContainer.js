"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TodoItem_1 = __importDefault(require("./TodoItem"));
var Input_1 = __importDefault(require("./Input"));
var react_redux_1 = require("react-redux");
var todoSlice_1 = require("../../features/todoSlice");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var TodoContainer = function () {
    var todoList = react_redux_1.useSelector(todoSlice_1.selectTodoList);
    console.log(todoList);
    return (react_1.default.createElement(material_1.Grid, { id: 'todoContainer', item: true },
        react_1.default.createElement(material_2.Paper, { id: 'five', sx: {
                height: 600,
                width: 350,
                borderRadius: 4,
                overflow: 'scroll',
                overflowX: 'hidden',
                position: 'relative'
            } },
            react_1.default.createElement(material_1.Stack, { direction: 'column-reverse' }, todoList.map(function (item) { return (react_1.default.createElement(TodoItem_1.default, { key: "key" + item.id, name: item.item, done: item.done, id: item.id })); })),
            react_1.default.createElement(Input_1.default, null))));
};
exports.default = TodoContainer;
