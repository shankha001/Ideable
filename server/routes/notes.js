const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const User = require('../models/User');

// @route POST notes/:noteid/new
// @desc new note
router.post('/:noteid/new', async (req, res) => {
  const user = await User.findOne({ _id: req.params.noteid });

  const newNote = new Note({
    title: req.body.title,
    description: req.body.description,
    user: user._id,
  });
  await newNote.save();

  user.notes.push(newNote._id);
  await user.save();
  console.log(user);
  res.send(newNote);
});

module.exports = router;