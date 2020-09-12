import React, { useEffect } from 'react';
import { viewNotes } from '../../helper';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

function SavedNotes({ user, notes }) {
  useEffect(() => {
    viewNotes(user.currentUser.id);
  }, [user.currentUser.id]);

  return (
    <React.Fragment>
      <h1>Saved Notes</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {notes.loading ? (
          <h2>Loading</h2>
        ) : notes.notes.length ? (
          notes.notes.map((note, idx) => (
            <div
              style={{
                width: '150px',
                margin: '10px',
                backgroundColor: 'grey',
              }}
              key={idx}
            >
              <p>{note.title}</p>
              <p>{ReactHtmlParser(note.description)}</p>
            </div>
          ))
        ) : null}
        <button
          onClick={() => {
            viewNotes(user.currentUser.id);
          }}
        >
          Refresh
        </button>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  notes: state.notes,
});

export default connect(mapStateToProps, null)(SavedNotes);
