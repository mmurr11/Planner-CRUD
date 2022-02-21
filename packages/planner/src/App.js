import './App.css'
import TodoContainer from './components/TodoContainer';
import { createTheme, ThemeProvider } from '@mui/material'
import { indigo, lightBlue } from '@mui/material/colors';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500]
    },
    secondary: {
      main: indigo[500]
    },
  }, 

  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ]
  }
})

const App = () => {

  return (
    <div className='app'>
    <Grid id='one' sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid id='two' item xs={12}>
        <Grid id='three' container justifyContent="center" alignItems="center" spacing={9}>
          <TodoContainer/>  
          <TodoContainer/>
          <TodoContainer/>
        </Grid>
      </Grid>      
    </Grid>
    </div>
  );
              
}

export default App;