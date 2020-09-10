import React from 'react';
import './App.css';
import Register from './components/auth/register/regsiter';
import Login from './components/auth/login/login';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
