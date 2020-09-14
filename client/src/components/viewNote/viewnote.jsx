import React from 'react';
import './viewnote.styles.scss';

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
              <div className="viewnote__container">
                <h1
                  style={{ fontFamily: 'VALORANT Regular', fontSize: '32px' }}
                >
                  Title
                </h1>
                <p style={{ fontSize: '18px' }}>{note.title}</p>
                <h2
                  style={{ fontFamily: 'VALORANT Regular', fontSize: '28px' }}
                >
                  Note
                </h2>
                <p>{ReactHtmlParser(note.description)}</p>
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
