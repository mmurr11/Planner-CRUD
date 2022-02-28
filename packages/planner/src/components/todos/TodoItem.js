import React from 'react'
import './TodoItem.css'
import { Checkbox, Paper, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setCheck, deleteTodo, saveTodo } from '../../features/todoSlice'
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import { DeleteOutline, EditOutlined, CheckSharp } from '@mui/icons-material'
import { useState } from 'react'

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch()
    const [readOnly, setReadOnly] = useState(true)
    const [item, setItem] = useState(name) 

    const editTodo = () => {
        dispatch(saveTodo({
            item: item,
            done: done,
            id: id
        }))
    }

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    const handleEdit = () => {       
        if (!readOnly) {
            handleDelete()
            editTodo()        
        }
        setReadOnly(!readOnly)    
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleEdit()
        }
        else return
    }
    
    return (
        <Stack
            alignItems="stretch"
        >
            <Paper 
                id={id}
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
                <TextareaAutosize
                    id={`textArea${id}`}
                    className={done && 'todoItem--done'}
                    // if value={item} or defaultValue={name or item}, state is updated but is in 
                    // different order to how it renders and it doesnt render the state correctly on handleDelete.
                    // if value={name}, cant edit text or update state but handleDelete works as expected.
                    // Expected behavior: 
                    value={item}
                    onChange={e => setItem(e.target.value)}                    
                    readOnly={readOnly}  
                    spellCheck={false}                 
                    variant="standard"
                    onKeyPress={handleEnter}
                    style={{
                            fontFamily: 'inherit',
                            fontSize: 'medium',
                            textAlign: 'left',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                            border: 'none',
                            outline: 'none',
                            resize: 'none',
                            padding: 1,
                            width: 200,
                            caretColor: readOnly ? 'transparent' : 'auto' 
                    }}
                />
                <div className='buttonContainer'>
                    <Button 
                        id={`editButton${id}`}
                        variant='contained' 
                        size='small' 
                        sx={{
                            margin: 1,
                            minWidth: 45,
                        }}
                        onClick={handleEdit}
                        >
                            {
                                readOnly ? <EditOutlined/> : <CheckSharp/>
                            }
                    </Button>
                    <Button 
                        id={`deleteButton${id}`}
                        variant='contained' 
                        size='small' 
                        sx={{
                            margin: 1,
                            minWidth: 45,
                        }}
                        onClick={handleDelete}
                    >
                            <DeleteOutline/>
                    </Button>
                </div>
            </Paper>
        </Stack>
    )
}

export default TodoItem