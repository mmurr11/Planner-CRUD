import React from 'react'
import './Calendar.css'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calendar = ({ completed, incomplete, overdue, unfilled }) => {

    const [value, setValue] = React.useState(new Date().getTime());
    const yesterdayTimeStamp = value - 24*60*60*1000;
    const yesterdayDate = new Date(yesterdayTimeStamp);
    console.log(value >= yesterdayDate)

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