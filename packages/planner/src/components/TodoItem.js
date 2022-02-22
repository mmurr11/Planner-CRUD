import React from 'react'
import './TodoItem.css'
import { Checkbox, Paper, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setCheck, deleteTodo } from '../features/todoSlice'
import { Button } from '@mui/material';


const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch()

    const handleCheck = () => {

        dispatch(setCheck(id))

    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <Stack
            alignItems="stretch"
        >
            <Paper 
                className='todoItem'  
                elevation={2}
                sx={{
                    borderRadius: 4,
                    justifyContent: 'space-between',
                }} 
            >

                <Checkbox
                    checked={done}
                    color='primary'
                    onChange={handleCheck}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    size='large'
                />

                <p className={done && 'todoItem--done'}>{name}</p>
                <Button 
                    variant='contained' 
                    size='large' 
                    sx={{
                        margin: 1,
                        height: 0.5,
                    }}
                    onClick={handleDelete}>
                        X
                    </Button>
            </Paper>
        </Stack>
    )
}

export default TodoItem