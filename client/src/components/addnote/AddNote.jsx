import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './addnote.styles.css';
function AddNote() {
  const [value, setValue] = useState('');
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <React.Fragment>
      <ReactQuill
        onChange={handleChange}
        value={value}
        modules={AddNote.modules}
        formats={AddNote.formats}
        style={{
          width: '50%',
          height: '200px',
          fontSize: '20px',
          margin: '10px auto',
        }}
      />
    </React.Fragment>
  );
}

//===Quill modules===//
AddNote.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
    [{ color: [] }, { background: [] }],
  ],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
//====Quill formats===//
AddNote.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'color',
];
export default AddNote;
