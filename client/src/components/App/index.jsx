import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import News from "../../pages/News"



function App() {
  return (

    <div>
      Hello Y'all
      <Router>
        <h1>FINANCIAL TOOL</h1>
        
        <Link to="/">Home</Link>
        <Link to="/portfolio" >My Portfolio</Link>
        <Link to="/news">Search News</Link>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/news" component={News} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
