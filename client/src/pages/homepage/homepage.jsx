import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <React.Fragment>
      <Link to="/register">
        <Button variant="contained">Register</Button>
      </Link>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default Homepage;
