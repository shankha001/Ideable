import React, { useEffect } from 'react';
import './App.css';
import Register from './components/auth/register/regsiter';
import Login from './components/auth/login/login';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import jwt_decode from 'jwt-decode';
import store from './redux/store';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

function App({ currentUser }) {
  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      store.dispatch(setCurrentUser(decoded));
    }
  }, []);
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
const mapStateToProps = (state) => ({
  currentUser: state.user,
});

export default connect(mapStateToProps, null)(App);
