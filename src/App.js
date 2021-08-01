import React from 'react'
import { Switch, Route } from 'react-router';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'




function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
