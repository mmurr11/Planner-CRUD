import React from 'react';
import './App.css'
import Input from './components/Input'
import TodoContainer from './components/TodoContainer';
import { createTheme, ThemeProvider } from '@mui/material'
import { indigo, lightBlue } from '@mui/material/colors';
import { Grid, Container } from '@mui/material';

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

function App() {

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container spacing={1}>            
              <div className='app_container'>
                <TodoContainer/>            
              </div>            
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;