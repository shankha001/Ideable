import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

function ViewNote({ match, notes }) {
  return (
    <React.Fragment>
      {console.log(match.params.noteid)}
      {notes.notes.map(
        (note) =>
          note._id === match.params.noteid && (
            <div>
              <h1>{note.title}</h1>
              <h2>{ReactHtmlParser(note.description)}</h2>
            </div>
          )
      )}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default withRouter(connect(mapStateToProps, null)(ViewNote));
