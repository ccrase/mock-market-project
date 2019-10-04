import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={BookSearch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;