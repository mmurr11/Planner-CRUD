import React from 'react'
import './Calendar.css'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calendar = ({ datePassed, items, itemsDue }) => {

  let completed, incomplete, overdue, unfilled = ""

  const [status, setStatus] = React.useState(unfilled);

  const stuff = () => {
    if (items === true && itemsDue === false) {
      completed = !completed
      setStatus(completed)
    }
    else if (datePassed === false && items === true && itemsDue === true) {
      incomplete = !incomplete
      setStatus(incomplete)
    }
    else if (datePassed === true && items === true && itemsDue === true) {
      overdue = !overdue
      setStatus(overdue)
    }
  }    

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
                {
                  stuff(),
                items ? <span>true</span> : <span>false</span>,
                console.log(status)

              }  
              </LocalizationProvider>  
              
    )

}

export default Calendar

// dateStatusList.map the object of bools from todoSlice

