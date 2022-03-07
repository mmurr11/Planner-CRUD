import React from 'react'
import './Calendar.css'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectDateStatus, setToday } from '../../features/todoSlice';

const Calendar = ({ completed, incomplete, overdue, unfilled }) => {

  const dispatch = useDispatch()

    const [value, setValue] = React.useState(new Date().getTime());
    const dateStatus = useSelector(selectDateStatus)

    const selectDate = (newValue) => {
      setValue(newValue.getTime())
      dispatch(setToday({
        date: value,
        status: {...dateStatus}
      }))
      console.log( dateStatus)
    }
 
    return (

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  orientation="landscape"
                  openTo="day"
                  value={value}
                  onChange={selectDate}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{
                    padding: 1,
                  }}
                />
              </LocalizationProvider>  
              
    )

}

export default Calendar