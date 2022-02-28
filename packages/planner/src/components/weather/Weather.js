import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Stack } from '@mui/material'
import { Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { fontSize } from '@mui/material/node_modules/@mui/system'

const WeatherContainer = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    return (

        <Grid id='weatherContainer' item>
            <Paper
                sx={{
                  height: 600,
                  width: 350,
                  borderRadius: 4,
                  overflow: 'scroll',
                  overflowX: 'hidden',
                  position: 'relative'
                }}
            >
                <Stack
                    alignItems='center'
                >

                </Stack>
            </Paper>
        </Grid>

    )

}

export default WeatherContainer