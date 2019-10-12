import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';



function App() {
  return (

    <div>
      Hello Y'all
      <Router>
        <h1>FINANCIAL TOOL</h1>
        
        <Link to="/">Home</Link>
        <Link to="/portfolio" >My Portfolio</Link>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
