import React from 'react';
import { UserProvider } from './context/UserProvider';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Login' exact component={Login} />
        </Switch>
      </Router>
    </UserProvider>
  )
}

export default App
