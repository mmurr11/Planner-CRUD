import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'
import dateStatusReducer from '../features/dateStatusSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    dateStatus: dateStatusReducer,
  },
});