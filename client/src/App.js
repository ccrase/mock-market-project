import React from "react";
import NavBar from '../src/components/Navbar';

// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import News from './pages/News';
import Homepage from "./components/Homepage";
import Researchpage from "./pages/research";
import StockSave from "./pages/stocks/index";
import { useAuth0 } from './react-auth0-wrapper';

// ReactGA.initialize('UA-000000-01');
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const { loading, user } = useAuth0();
  console.log(user);
  
  return (
     <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/news" component={News}/>
          <Route path="/portfolio" component={() => <Portfolio user={user} />} />
          <Route exact path="/research" component={Researchpage} />
          {user &&
          <Route path="/StockSave/:id?" component={(props) => <StockSave user={user} id={props.match.params.id} />} />
          }
        </Switch>
      </BrowserRouter>
     </div>
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