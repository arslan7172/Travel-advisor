import './App.css';
import {Header,List,Map} from './Components'

import {CssBaseline, Grid} from '@material-ui/core'


function App() {
  return (
    <>
      <CssBaseline/>
      <Header/><App/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </> 
  );
}

export default App;
