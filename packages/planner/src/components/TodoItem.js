import React from 'react'
import './TodoItem.css'
import { Checkbox } from '@mui/material'
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
        <div className='todoItem'>

            <Checkbox
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                size='large'
            />

            <p className={done && 'todoItem--done'}>{name}</p>
            <Button variant='contained' onClick={handleDelete}>X</Button>
        </div>
    )
}

export default TodoItem