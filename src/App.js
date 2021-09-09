import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import InvestmentPlans from './Pages/InvestmentPlans';
import ULIP from './Pages/ULIP'
import FAQ from './Pages/FAQ';
import Jargon from './Pages/Jargon';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      {/* <ButtonAppBar/> */}
      <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
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
