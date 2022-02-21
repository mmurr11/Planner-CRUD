import React from 'react'
import './TodoContainer.css'
import TodoItem from './TodoItem'
import Input from './Input'
import { useSelector } from 'react-redux'
import { selectTodoList } from '../features/todoSlice';
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'

const TodoContainer = () => {

    const todoList = useSelector(selectTodoList)

    return (

        <Grid id='four' item>
            <Paper
                id='five'
                sx={{
                  height: 600,
                  width: 350,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  borderRadius: 4,
                }}
            >
                {
                    todoList.map(item => (
                        <TodoItem
                            name={item.item}
                            done={item.done}
                            id={item.id} 
                        />
                    ))
                }
                <Input/>
            </Paper>
        </Grid>
    )

}

export default TodoContainer