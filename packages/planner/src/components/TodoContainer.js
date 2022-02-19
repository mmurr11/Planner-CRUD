import React from 'react'
import './TodoContainer.css'
import TodoItem from './TodoItem'
import Input from './Input'
import { useSelector } from 'react-redux'
import { selectTodoList } from '../features/todoSlice';
import { Grid } from '@mui/material'

const TodoContainer = () => {

    const todoList = useSelector(selectTodoList)

    return (
        <>
        <div className='app_todoContainer'>
            {
                  todoList.map(item => (
                    <TodoItem
                      name={item.item}
                      done={item.done}
                      id={item.id} />
                  ))
            }
        </div>
        <Input/>
        </>
    )

}

export default TodoContainer