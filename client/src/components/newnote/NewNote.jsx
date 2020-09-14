import React, { useState } from 'react';
import './style.css';
import './newnote.styles.scss';
import { connect } from 'react-redux';
import { addNote } from '../../helper';
import { viewNotes } from '../../helper';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Input } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router-dom';
function NewNote({ user, history }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || description === '') {
      setSeverity('warning');
      handleClick();
      return;
    }
    const newNote = {
      title: title,
      description: description,
    };
    addNote(newNote, user.currentUser.id);
    viewNotes(user.currentUser.id);

    history.push('/');
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="newnote__container">
        <form onSubmit={handleSubmit}>
          <h1 style={{ fontFamily: 'VALORANT Regular', fontSize: '32px' }}>
            Title
          </h1>
          <Input
            placeholder="Enter title here.."
            autoFocus
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <h1
            style={{
              marginTop: '30px',
              fontFamily: 'VALORANT Regular',
              fontSize: '28px',
            }}
          >
            NOTE
          </h1>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
              setDescription(data);
            }}
          />

          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            style={{ float: 'right', marginBottom: '20px' }}
          >
            Submit
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {severity === 'warning'
              ? 'Please fill all the fields !'
              : 'Success!! Your Note has been saved'}
          </Alert>
        </Snackbar>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps, null)(NewNote));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
