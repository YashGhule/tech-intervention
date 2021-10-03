import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import ULIP from './Pages/ULIP'
import FAQ from './Pages/FAQ';
import Jargon from './Pages/Jargon';
import ProminentAppBar from './Components/Header (App Bar)/AppBar';
import BasicButtonGroup1 from './Components/Footer/SocialMediaIcons(Footer)';
import BasicButtonGroup2 from './Components/Footer/ContactIcons(Footer)';
import { Divider } from '@material-ui/core';
import ControlledAccordions1 from './Components/Footer/Accordion(Footer)';
import SimplePaper1 from './Components/Footer/IRDAINotice&Copyrights(Footer)';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <ProminentAppBar />
      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/ulip'}  > <ULIP /> </Route>
        <Route path={process.env.PUBLIC_URL + '/faq'}  > <FAQ /> </Route>
        <Route path={process.env.PUBLIC_URL + '/jargon'}  > <Jargon /> </Route>
      </Switch>

      <footer className="App-footer">
        <Grid container spacing={2} >
          <Grid item xs={12} sm={12} md={12}>
            <BasicButtonGroup1 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <BasicButtonGroup2 />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Divider />
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12}> */}
        <ControlledAccordions1 />
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={12} md={12}> */}
        <SimplePaper1 />
        {/* </Grid> */}
      </footer>
    </div>
  );
}

export default App;
