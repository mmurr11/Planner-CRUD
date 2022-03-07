import React from 'react'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import Calendar from './Calendar'

const CalendarContainer = () => {


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
            <Calendar />               
            </Paper>
        </Grid>
        
    )

}

export default CalendarContainer