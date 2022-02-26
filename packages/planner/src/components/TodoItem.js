import React from 'react'
import './TodoItem.css'
import { Checkbox, Paper, Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setCheck, deleteTodo, saveTodo } from '../features/todoSlice'
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import { DeleteOutline, EditOutlined } from '@mui/icons-material'
import { useState } from 'react'

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch()
    const [readOnly, setReadOnly] = useState(true)
    const [item, setItem] = useState(name)  

    const useToggle = () => {
        setReadOnly(!readOnly)
     }

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }


    const handleEdit = () => {

        // dispatch(setEdit(id))
        handleDelete(id)
        setReadOnly(true)
        dispatch(saveTodo({
            item: item,
            done: done,
            id: id
        }))
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
                    value={item}
                    onChange={e => setItem(e.target.value)}
                    spellCheck={false}                    
                    readOnly={readOnly}                   
                    variant="standard"
                    style={{
                            fontFamily: 'inherit',
                            fontSize: 'medium',
                            textAlign: 'left',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                            border: 'none',
                            outline:'none',
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
                        onClick={readOnly ? useToggle : handleEdit}
                        >
                            <EditOutlined/>
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