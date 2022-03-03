import React from 'react'
import './Calendar.css'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calendar = ({ completed, incomplete, overdue, unfilled }) => {

    const [value, setValue] = React.useState(new Date());

    return (

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  orientation="landscape"
                  openTo="day"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{
                    padding: 1,
                  }}
                />
              </LocalizationProvider>  
              
    )

}

export default Calendar