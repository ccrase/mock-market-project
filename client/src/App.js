import React,{component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockSave from "./pages/stocks/index";
import Research from "./pages/research/Research"



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={StockSave} /> 
          <Route exact path="/research" component={Research} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;