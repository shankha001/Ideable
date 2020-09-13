import React from 'react';
import AddNote from '../../components/newnote/NewNote';
import { connect } from 'react-redux';
import SavedNotes from '../../components/savednotes/savednotes';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './notes.styles.scss';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

function Notes({ user }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="notes__container">
        <h1 style={{ textAlign: 'center' }}>Hello {user.currentUser.name}</h1>
        <Link to="/newnote">
          <Tooltip title="New Note" aria-label="note">
            <Fab color="secondary" className={classes.absolute}>
              <AddIcon style={{ color: 'white' }} />
            </Fab>
          </Tooltip>
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

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));
