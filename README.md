<h1 style="text-align:center;"> Hello Iam Nahid</h1>
<h5 style="text-align:center;">
This is my #2 React Project</h5>
<h2><a href="https://pensive-swartz-2bf8dd.netlify.app/"> View Live Site</a></h2
<h3 style="text-align:center">Full Responsibe Layout</h3>
<h5>Demo-1:</h5>
<a style="text-align:center; margin:auto;" href="https://ibb.co/JynK42Y"><img src="https://i.ibb.co/hZsyjHG/15.jpg" alt="15" border="0"></a>
<h5>
Demo-2:
</h5>
<a style="text-align:center; margin:auto;" href="https://ibb.co/26Scktf"><img src="https://i.ibb.co/VNxMqSP/03.jpg" alt="03" border="0"></a>
### Features
Founded.
Country.
Sports Type.
Gender.
Logo


# Editor.md
<h2>
[Md Nahid](https://www.facebook.com/profile.php?id=100052249802564 "Md Nahid")
</h2>

#H1 header
##H2 header
###H3 header
####H4 header
#####H5 header
######H6 header
##Headers (Underline)

###Links

[Links](https://pensive-swartz-2bf8dd.netlify.app/ligInfo/4328)


####Inline code

`$ npm install marked`

####React　

```
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

```

####HTML code

```html
  return (
        <div className="col-md-4 g-4">
            <div className="py-3">
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                    <img src={logo.strBadge} alt=""/>
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                   <Link onClick={() => leagsData()} className="btn btn-primary" to={`/ligInfo/${idLeague}`}>Explore  <FontAwesomeIcon icon={faArrowRight} /> </Link>
                   
                    
                </div>
                </div>
                   
            </div>
           
        </div>
    );
};```
