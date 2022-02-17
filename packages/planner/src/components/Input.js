import React, { useState } from 'react'
import './Input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

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
            <input id='textField' type='text' value={input} onChange={e => setInput(e.target.value)}>

            </input>
            <button onClick={addTodo}>
                Add
            </button>
        </div>
    )
}

export default Input