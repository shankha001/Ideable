import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../helper';
import { connect } from 'react-redux';
//===MaterialUI===//
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Header({ user }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Ideable</Button>
          <Typography variant="h6" className={classes.title}></Typography>
          {/* ===Conditional Rendering of Buttons=== */}
          {user.currentUser ? (
            <Button onClick={logoutUser} variant="contained">
              Logout
            </Button>
          ) : (
            <div>
              <Link
                to="/register"
                style={{ textDecoration: 'none', marginRight: '10px' }}
              >
                <Button variant="contained">Register</Button>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Header);
