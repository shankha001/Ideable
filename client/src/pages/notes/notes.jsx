import React from 'react';
import AddNote from '../../components/addnote/AddNote';
import { connect } from 'react-redux';
import SavedNotes from '../../components/savednotes/savednotes';
function Notes({ user }) {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center' }}>Hello {user.currentUser.name}</h1>
      <AddNote />

      <SavedNotes />
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Notes);
