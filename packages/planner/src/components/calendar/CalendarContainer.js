import React from 'react'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import Calendar from './Calendar'
import { useSelector } from 'react-redux'

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
            {/* { 
                        dateStatus.map(item => (
                            <Calendar
                                id={item.id}
                                items={item.items}
                                itemsDue={item.itemsDue}
                                datePassed={item.datePassed}
                            />
                        ))
            }  */}
            <Calendar />               
            </Paper>
        </Grid>
        
    )

}

export default CalendarContainer