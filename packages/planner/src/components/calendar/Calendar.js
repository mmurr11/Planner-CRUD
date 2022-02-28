import React from 'react'
import './Calendar.css'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const WeekContainer = () => {

    const [value, setValue] = React.useState(new Date());

    return (

        <Grid id='weekContainer' item>
            <Paper
                sx={{
                  height: 600,
                  width: 350,
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative'
                }}
            > 
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  orientation="landscape"
                  openTo="day"
                  value={value}
                  shouldDisableDate={isWeekend}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{
                    padding: 1,
                  }}
                />
              </LocalizationProvider>                
            </Paper>
        </Grid>
        
    )

}

export default WeekContainer



