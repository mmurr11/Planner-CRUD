"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var TodoContainer_js_1 = require("./components/todos/TodoContainer.js");
var React = __importStar(require("react"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var App = function () {
    return (<div className='app'>
    <Grid_1.default id='one' sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid_1.default id='two' item xs={12}>
        <Grid_1.default id='three' container justifyContent="center" alignItems="center" spacing={9}>
          <TodoContainer_js_1.TodoContainer />
        </Grid_1.default>
      </Grid_1.default>      
    </Grid_1.default>
    </div>);
};
exports.default = App;
