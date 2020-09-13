import React, { useEffect } from 'react';
import { viewNotes } from '../../helper';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import '../newnote/style.css';

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
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Paper>
          ))
        ) : null}
        {
          // <button
          //   onClick={() => {
          //     viewNotes(user.currentUser.id);
          //   }}
          // >
          //   Refresh
          // </button>
        }
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
    minWidth: 275,
    margin: '10px',
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
});
