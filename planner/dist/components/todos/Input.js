"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./Input.css");
var react_redux_1 = require("react-redux");
var todoSlice_1 = require("../../features/todoSlice");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var Input = function () {
    var _a = react_1.useState(''), input = _a[0], setInput = _a[1];
    var dispatch = react_redux_1.useDispatch();
    var addTodo = function () {
        if (input.length < 1) {
            return;
        }
        dispatch(todoSlice_1.saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }));
        setInput("");
    };
    var handleEnter = function (e) {
        if (e.key === "Enter") {
            addTodo();
        }
        else
            return;
    };
    return (react_1.default.createElement(material_1.Paper, { className: 'input', elevation: 5, sx: {
            position: 'absolute',
            width: 0.95,
            bottom: 0,
        } },
        react_1.default.createElement(material_2.TextField, { id: "textField", variant: "standard", label: 'I need to...', value: input, onChange: function (e) { return setInput(e.target.value); }, autoComplete: 'off', onKeyPress: handleEnter, sx: {
                pt: 1,
                pb: 1,
                ml: 3,
                fontSize: 2,
            } }),
        react_1.default.createElement(material_1.Button, { id: 'textArea', variant: 'contained', size: 'large', sx: {
                margin: 1,
                height: 0.5,
            }, onClick: addTodo },
            react_1.default.createElement(icons_material_1.Add, null))));
};
exports.default = Input;
