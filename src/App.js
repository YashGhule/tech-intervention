import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import InvestmentPlans from './Pages/InvestmentPlans';
import ULIP from './Pages/ULIP'
import FAQ from './Pages/FAQ';
import Jargon from './Pages/Jargon';
import TemporaryDrawer from './Components/Drawer';
import ControlledAccordions from './Components/ControlledAccordion';
import FloatingActionButtons from './Components/FAButtonHome';
import CustomizedMenus from './Components/Menu';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      {/* <ButtonAppBar/> */}
      <PrimarySearchAppBar/>
      <TemporaryDrawer/>
      <ControlledAccordions/>
      <FloatingActionButtons/>
      <CustomizedMenus/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/investmentplans'}  > <InvestmentPlans/> </Route>
            <Route path={process.env.PUBLIC_URL + '/ulip'}  > <ULIP/> </Route>
            <Route path={process.env.PUBLIC_URL + '/faq'}  > <FAQ/> </Route>
            <Route path={process.env.PUBLIC_URL + '/jargon'}  > <Jargon/> </Route>
          </Switch>

      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
  }

export default App;
