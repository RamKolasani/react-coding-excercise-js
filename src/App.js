import React from 'react';

import './App.css';
import menuData from './menu-data-backup.json';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ViewItem from './components/ViewItem';




function App() {
  let MenuData= menuData;
  console.log(menuData);
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Dashboard MenuData={MenuData} />} /> 
        <Route path='/view-item/:itemId' component={ViewItem} />
      </Switch>
    </Router>
  );
}

export default App;