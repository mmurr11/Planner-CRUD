import React from 'react'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import Calendar from './Calendar'
import { useSelector } from 'react-redux'
import { selectDateStatus } from '../../features/calendarSlice'

const CalendarContainer = () => {

    const dateStatus = useSelector(selectDateStatus)

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
            { 
                        dateStatus.map(item => (
                            <Calendar
                                datePassed={item.datePassed}
                                items={item.items}
                                itemsDue={item.itemsDue} 
                            />
                        ))
            } 
            <Calendar />               
            </Paper>
        </Grid>
        
    )

}

export default CalendarContainer

// dateStatusList.map the object of bools from todoSlice

