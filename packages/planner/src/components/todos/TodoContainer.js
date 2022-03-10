import React from 'react'
import TodoItem from './TodoItem'
import Input from './Input'
import { useSelector } from 'react-redux'
import { selectTodoList } from '../../features/todoSlice';
import { Grid, Stack } from '@mui/material'
import { Paper } from '@mui/material'

const TodoContainer = () => {

    const todoList = useSelector(selectTodoList)
console.log(todoList)
    return (

        <Grid id='todoContainer' item>
            <Paper
                id='five'
                sx={{
                  height: 600,
                  width: 350,
                  borderRadius: 4,
                  overflow: 'scroll',
                  overflowX: 'hidden',
                  position: 'relative'
                }}
            >
                <Stack
                    direction='column-reverse'
                >
                    {
                        todoList.map(item => (
                            <TodoItem
                                key={`key${item.id}`}
                                name={item.item}
                                done={item.done}
                                id={item.id} 
                            />
                        ))
                    }                
                </Stack>
                <Input/>
            </Paper>
        </Grid>

    )

}

export default TodoContainer