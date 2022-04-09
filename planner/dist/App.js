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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var React = __importStar(require("react"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var TodoContainer_1 = __importDefault(require("./components/todos/TodoContainer"));
var App = function () {
    return (React.createElement("div", { className: 'app' },
        React.createElement(Grid_1.default, { id: 'one', sx: { flexGrow: 1 }, container: true, spacing: 2 },
            React.createElement(Grid_1.default, { id: 'two', item: true, xs: 12 },
                React.createElement(Grid_1.default, { id: 'three', container: true, justifyContent: "center", alignItems: "center", spacing: 9 },
                    React.createElement(TodoContainer_1.default, null))))));
};
exports.default = App;
