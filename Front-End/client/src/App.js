import React from 'react'
import './styles/App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/pages/Aboutpages/About'
import Goal from './components/pages/Aboutpages/Goal'
import Services_Offered from './components/pages/Aboutpages/Services_Offered'
import What_Can_You_Do from './components/pages/Aboutpages/What_Can_You_Do'
import Home from './components/pages/Home'
import Problem from './components/pages/Problem'
import Facts from './components/pages/Facts'
import Help from './components/pages/Help'

import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Main from './components/pages/Profilepages/Main';
function App() {
  
  return (
      <Router>
        <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/About' exact component = {About}/>
        <Route path='/Goal' exact component = {Goal}/>
        <Route path='/Services_Offered' exact component = {Services_Offered}/>
        <Route path= '/What_Can_You_Do' exact component = {What_Can_You_Do} />
        <Route path= '/Problem' exact component = {Problem} />
        <Route path= '/Facts' exact component = {Facts} />
        <Route path= '/Help' exact component = {Help} />
        <Route path= '/Profile/Orders' exact component = {Main} />
		{/* <Route path = "/browse" exact component ={Browse} />
		<Route path = "/add_food" exact component ={addFood} /> */}
        
      </Switch>
      </Router>
    
      
    
  );
}

export default App;
