"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./TodoItem.css");
var material_1 = require("@mui/material");
var react_redux_1 = require("react-redux");
var todoSlice_1 = require("../../features/todoSlice");
var material_2 = require("@mui/material");
var base_1 = require("@mui/base");
var icons_material_1 = require("@mui/icons-material");
var react_2 = require("react");
var TodoItem = function (_a) {
    var name = _a.name, done = _a.done, id = _a.id;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_2.useState(true), readOnly = _b[0], setReadOnly = _b[1];
    var _c = react_2.useState(name), item = _c[0], setItem = _c[1];
    var handleCheck = function () {
        dispatch(todoSlice_1.setCheck({
            id: id
        }));
    };
    var handleDelete = function () {
        dispatch(todoSlice_1.deleteTodo({
            id: id
        }));
    };
    var handleEdit = function () {
        if (!readOnly) {
            dispatch(todoSlice_1.editTodo({
                id: id,
                name: item
            }));
        }
        setReadOnly(!readOnly);
    };
    var handleEnter = function (e) {
        if (e.key === "Enter") {
            handleEdit();
        }
        else
            return;
    };
    return (react_1.default.createElement(material_1.Stack, { alignItems: "stretch" },
        react_1.default.createElement(material_1.Paper, { id: id, className: 'todoItem', elevation: 2, sx: {
                borderRadius: 4,
                justifyContent: 'space-between',
            } },
            react_1.default.createElement(material_1.Checkbox, { checked: done, color: 'primary', onChange: handleCheck, inputProps: { 'aria-label': 'secondary checkbox' } }),
            react_1.default.createElement(base_1.TextareaAutosize, { id: "textArea" + id, className: 'todoItem--done', value: item, onChange: function (e) { return setItem(e.target.value); }, readOnly: readOnly, spellCheck: false, onKeyPress: handleEnter, style: {
                    fontFamily: 'inherit',
                    fontSize: 'medium',
                    textAlign: 'left',
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    padding: 1,
                    width: 200,
                    caretColor: readOnly ? 'transparent' : 'auto',
                    textDecoration: done ? 'line-through' : 'none'
                } }),
            react_1.default.createElement("div", { className: 'buttonContainer' },
                react_1.default.createElement(material_2.Button, { id: "editButton" + id, variant: 'contained', size: 'small', sx: {
                        margin: 1,
                        minWidth: 45,
                    }, onClick: handleEdit }, readOnly ? react_1.default.createElement(icons_material_1.EditOutlined, null) : react_1.default.createElement(icons_material_1.CheckSharp, null)),
                react_1.default.createElement(material_2.Button, { id: "deleteButton" + id, variant: 'contained', size: 'small', sx: {
                        margin: 1,
                        minWidth: 45,
                    }, onClick: handleDelete },
                    react_1.default.createElement(icons_material_1.DeleteOutline, null))))));
};
exports.default = TodoItem;
