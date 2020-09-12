import React, { useState } from 'react';

import './addnote.styles.css';
import { connect } from 'react-redux';
import { addNote } from '../../helper';
import { viewNotes } from '../../helper';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AddNote({ user }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title: title,
      description: description,
    };
    addNote(newNote, user.currentUser.id);
    viewNotes(user.currentUser.id);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h2>Title</h2>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>Note</h3>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
            setDescription(data);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(AddNote);
