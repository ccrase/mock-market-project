import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockSave from "./pages/stocks/index";
import Homepage from './components/Homepage/index';
import Research from "./pages/research/Research"



function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/" component={StockSave} />
          <Route exact path="/research" component={Research} />
          <Route path='/home' comonent={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;