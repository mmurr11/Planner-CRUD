import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import TodoContainer from './components/todos/TodoContainer';

const App: React.FC = () => {

  return (
    <div className='app'>
    <Grid id='one' sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid id='two' item xs={12}>
        <Grid id='three' container justifyContent="center" alignItems="center" spacing={9}>
          <TodoContainer/>
        </Grid>
      </Grid>      
    </Grid>
    </div>
  );
              
}

export default App;