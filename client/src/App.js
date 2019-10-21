import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import StockSave from "./pages/stocks/index";
import Homepage from './components/Homepage';
import Research from "./pages/research/Research";
import Sidebar from './components/globalComponents/Sidebar'
import NavBar from '../src/components/Navbar';
// New - import the React Router components, and the Profile page component
import Portfolio from "./components/Portfolio";
import News from './pages/News';

function App() {
  let user = { username: "username", percent: 5, tickers: ["AAPL, GOOG, MSFT, AMZN"], }

  return (
    <ParallaxProvider className="App">
      <Router>
        <div id='top-accent'></div>
        <Sidebar link={Link} user={user} />
        <Switch>
          <Route exact path="/news" component={News}/>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/trade" component={StockSave} />
          <Route exact path="/research" component={Research} />
          <Route path='/' component={Homepage} />
        </Switch>
      </Router>
    </ParallaxProvider>
  );
}

export default App;



//ORIGINAL APP PAGE
// import React,{component} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import StockSave from "./pages/stocks/index";
// import Homepage from './components/Homepage/index';
// import Research from "./pages/research/Research"



// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route path='/home' comonent={Homepage} />
//           <Route exact path="/" component={StockSave} />
//           <Route exact path="/research" component={Research} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;