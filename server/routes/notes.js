const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const User = require('../models/User');

// @route POST notes/:noteid/new
// @desc new note
router.post('/:userid/new', async (req, res) => {
  const user = await User.findOne({ _id: req.params.userid });

  const newNote = new Note({
    title: req.body.title,
    description: req.body.description,
    user: user._id,
  });
  await newNote.save();

  user.notes.push(newNote._id);
  await user.save();
  // console.log(user);
  res.send(newNote);
});

// @route POST notes/:noteid/view
// @desc view note
router.get('/:noteid/view', async (req, res) => {
  const popNotes = await User.findOne({ _id: req.params.noteid }).populate(
    'notes'
  );
  res.json(popNotes.notes);
});

// @route POST notes/:noteid/delete
// @desc view note
router.post('/:noteid/:userid/delete', async (req, res) => {
  Note.findByIdAndDelete(req.params.noteid, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('success');
    }
  });
});

module.exports = router;
