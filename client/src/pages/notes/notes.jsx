import React from 'react';
import AddNote from '../../components/addnote/AddNote';
import { connect } from 'react-redux';
function Notes({ currentUser }) {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center' }}>
        Hello {currentUser.currentUser.name}
      </h1>
      <AddNote />
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.user,
});

export default connect(mapStateToProps, null)(Notes);
