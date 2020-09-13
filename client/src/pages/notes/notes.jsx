import React from 'react';
import AddNote from '../../components/newnote/NewNote';
import { connect } from 'react-redux';
import SavedNotes from '../../components/savednotes/savednotes';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './notes.styles.scss';

function Notes({ user }) {
  return (
    <React.Fragment>
      <div className="notes__container">
        <h1 style={{ textAlign: 'center' }}>Hello {user.currentUser.name}</h1>
        <Link to="/newnote">
          <Button
            variant="contained"
            color="secondary"
            style={{ float: 'right' }}
          >
            New Note
          </Button>
        </Link>

        <SavedNotes />
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Notes);
