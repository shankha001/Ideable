import React, { useEffect } from 'react';
import { viewNotes } from '../../helper';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import '../newnote/style.css';
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteNote } from '../../helper';
function SavedNotes({ user, notes }) {
  const classes = useStyles();

  useEffect(() => {
    viewNotes(user.currentUser.id);
  }, [user.currentUser.id]);

  return (
    <React.Fragment>
      <h1
        style={{
          fontFamily: 'VALORANT Regular',
          fontSize: '32px',
          textAlign: 'center',
        }}
      >
        Saved Notes
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {notes.loading ? (
          <h2>Loading</h2>
        ) : notes.notes.length ? (
          notes.notes.map((note, idx) => (
            <Draggable>
              <Paper className={classes.root} elevation={3}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {note.title}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {ReactHtmlParser(note.description)}
                  </Typography>
                </CardContent>

                <button
                  type="submit"
                  className={classes.delete}
                  onClick={() => {
                    deleteNote(user.currentUser.id, note._id);
                  }}
                >
                  <DeleteIcon style={{ color: 'red' }} />
                </button>
              </Paper>
            </Draggable>
          ))
        ) : null}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  notes: state.notes,
});

export default connect(mapStateToProps, null)(SavedNotes);
const useStyles = makeStyles({
  root: {
    minWidth: 250,
    margin: '10px',
    position: 'relative',
    minHeight: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  delete: {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
});
