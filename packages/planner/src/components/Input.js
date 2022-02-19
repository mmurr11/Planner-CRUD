import React, { useState } from 'react'
import './Input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'

const Input = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {

        if (input.length < 1) {
            return
        }

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
        setInput("")
    }
    return (
        <div className='input'>

            <TextField 
                sx={{
                    mr: 1,
                    minWidth: 1,
                    fontSize: 200,
                }} 
                id="textField" 
                variant="outlined" 
                label='I need to...'
                value={input} 
                onChange={e => setInput(e.target.value)}
                autoComplete='off'
            >
            </TextField>

            <Button 
                id='textArea'
                variant='contained' 
                onClick={addTodo}>
                Add
            </Button>

        </div>
    )
}

export default Input