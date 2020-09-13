import React, { useEffect } from 'react';
import './App.css';
import Register from './components/auth/register/regsiter';
import Login from './components/auth/login/login';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import jwt_decode from 'jwt-decode';
import store from './redux/store';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import Notes from './pages/notes/notes';
import NewNote from './components/newnote/NewNote';

function App({ user }) {
  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      store.dispatch(setCurrentUser(decoded));
    }
  }, []);

  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route
          exact
          path="/login"
          render={() =>
            user.currentUser ? <Redirect to="/notes" /> : <Login />
          }
        />
        <Route
          exact
          path="/register"
          render={() =>
            user.currentUser ? <Redirect to="/notes" /> : <Register />
          }
        />
        <Route
          exact
          path="/newnote"
          render={() => (user.currentUser ? <NewNote /> : <Redirect to="/" />)}
        />

        {user.currentUser ? <Notes /> : <Redirect to="/" />}
      </Switch>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(App);
