import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import StockSave from "./pages/stocks/index";
import Homepage from './components/Homepage';
import Research from "./pages/research/Research";
import Sidebar from './components/globalComponents/Sidebar'



function App() {
  let user = {username: "username", percent: 5, tickers: ["AAPL, GOOG, MSFT, AMZN"], }

  return (
    <Router>
      <div className="homepage-top-accent"> </div>
      <Sidebar link={Link} user={user}/>
      <div>
        <Switch>
          <Route exact path="/trade" component={StockSave} />
          <Route exact path="/research" component={Research} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;