import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'
import calendarReducer from '../features/calendarSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    dateStatus: calendarReducer,
  },
});