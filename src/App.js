import './App.css';
import Home from './component/Home/Home';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

// import LeagInfo from './component/LeagInfo/LeagInfo';
import LeagItems from './component/LeagItems/LeagItems';
import LeagInfo from './component/LeagInfo/LeagInfo';
import NoMatch from './component/NoMatch/NoMatch';


function App() {
 
  return (
    <div className="App">
       
      
       <div className="as">
       <Router>
        
       <Switch>
         {/* <Route  path="/">
         <Header></Header>
         </Route> */}
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route  path="/home">
         <Home></Home>
         </Route>
          <Route  path="/ligInfo/:idLeague">
            <LeagInfo></LeagInfo>
          </Route>
          <Route path="/leagItems">
            <LeagItems></LeagItems>
          </Route>
          <Route path="*">
             <NoMatch></NoMatch>
          </Route>

        </Switch>
    </Router>
       </div>
     </div>
  );
}

export default App;
