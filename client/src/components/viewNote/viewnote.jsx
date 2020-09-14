import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

function ViewNote({ match, notes }) {
  return (
    <React.Fragment>
      {notes.notes.length ? (
        notes.notes.map(
          (note) =>
            note._id === match.params.noteid && (
              <div>
                <h1>{note.title}</h1>
                <h2>{ReactHtmlParser(note.description)}</h2>
              </div>
            )
        )
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default withRouter(connect(mapStateToProps, null)(ViewNote));
