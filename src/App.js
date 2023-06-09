import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const [login, setLogin] = useState(false)
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Login' exact component={Login} />
      </Switch>
    </Router>
  )
}

export default App
