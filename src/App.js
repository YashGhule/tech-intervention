import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import ULIP from './Pages/ULIP'
import FAQ from './Pages/FAQ';
import Jargon from './Pages/Jargon';
import FloatingActionButtons from './Components/FAButtonHome';
import ProminentAppBar from './Components/AppBar';
import SimpleCard1 from './Components/LifeInsurancePlanHomeCard';
import BasicButtonGroup1 from './Components/SocialMediaIcons(Footer)';
import BasicButtonGroup2 from './Components/ContactIcons(Footer)';
import { Divider } from '@material-ui/core';
import ControlledAccordions1 from './Components/Accordion(Footer)';
import SimplePaper1 from './Components/IRDAINotice&Copyrights(Footer)';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <ProminentAppBar/>
      {/* <FloatingActionButtons/> */}
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/ulip'}  > <ULIP/> </Route>
            <Route path={process.env.PUBLIC_URL + '/faq'}  > <FAQ/> </Route>
            <Route path={process.env.PUBLIC_URL + '/jargon'}  > <Jargon/> </Route>
          </Switch>

      <footer className="App-footer">
        <BasicButtonGroup1/>
          <Divider/>
        <BasicButtonGroup2/>
          <Divider/>
        <ControlledAccordions1/>
        <SimplePaper1/>
      </footer>
    </div>
  );
  }

export default App;
