import React from 'react';
import { UserProvider } from './context/UserProvider';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Team from './pages/Team';

const App = () => {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Login' exact element={<Login />} />
          <Route path='/Team/:id' exact element={<Team />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
