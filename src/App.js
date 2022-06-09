import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/Login';
import React from 'react';
import Home from './components/Home';
import './App.css'
import Profile from './components/Profile';


function App() {
  return (

    <Router>
      <Switch>    

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
