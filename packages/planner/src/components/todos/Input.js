import React, { useState } from 'react'
import './Input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'
import { Button, Paper } from '@mui/material'
import { TextField } from '@mui/material'
import { Add } from '@mui/icons-material'

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

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            addTodo()
        }
        else return
    }

    return (
        <Paper 
            className='input'
            elevation={5}
            sx={{
                position: 'absolute',
                width: 0.95,
                bottom: 0,
            }}
        >

            <TextField                 
                id="textField" 
                variant="standard" 
                label='I need to...'
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                autoComplete='off'
                onKeyPress={handleEnter}
                sx={{
                    pt: 1,
                    pb: 1,
                    ml: 3,
                    fontSize: 2,
                }}
            >
            </TextField>

            <Button 
                id='textArea'
                variant='contained' 
                size='large' 
                sx={{
                    margin: 1,
                    height: 0.5,
                }} 
                onClick={addTodo}
            >
                <Add/>
            </Button>

        </Paper>
    )
}

export default Input