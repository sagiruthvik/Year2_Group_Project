import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Style/big.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Favourites from './pages/Favourites';
import Addresses from './pages/Addresses';
import Profile from './pages/Profile'

function Main() {
  return (
    <>
    <Profile />
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/Profile/Orders' exact component={Orders} />
          <Route path='/Profile/Favourites' component={Favourites} />
          <Route path='/Profile/Addresses' component={Addresses} />
        </Switch>
      </Router>
    </>
  );
}

export default Main;
