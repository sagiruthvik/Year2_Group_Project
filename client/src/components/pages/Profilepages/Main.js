import React from 'react';
import Sidebar from './Sidebar';
import './Style/big.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Favourites from './pages/Favourites';
import Payments from './pages/Payments';
import Addresses from './pages/Addresses';

function Main() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/Profile/Orders' exact component={Orders} />
          <Route path='/Profile/Favourites' component={Favourites} />
          <Route path='/Profile/Payments' component={Payments} />
          <Route path='/Profile/Addresses' component={Addresses} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
