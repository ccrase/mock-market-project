import React,{component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockSave from "./pages/stocks/index";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={StockSave} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;