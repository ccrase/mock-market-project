import React,{component} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import StockSave from "./pages/stocks/index";
import Homepage from './components/Homepage/index';
import Research from "./pages/research/Research"
import News from './pages/News';



function App() {
  return (
    <Router>
    <h1>FINANCIAL TOOL</h1>
    
    <Link to="/">Home</Link>
    {/* <Link to="/portfolio" >My Portfolio</Link> */}
    <Link to="/news">Search News</Link>
    <Link to="/research">Research</Link>


    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* <Route exact path="/portfolio" component={Portfolio} /> */}
      <Route exact path="/news" component={News} />
      <Route exact path="/research" component={Research} />
    </Switch>
  </Router>

  );
}

export default App;