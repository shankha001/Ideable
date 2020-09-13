require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const passport = require('passport');
const chalk = require('chalk');
const PORT = process.env.PORT || 5000;

//===MongoDB===/
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.magenta('MongoDB connected ')));
// mongoose.set('debug', true);
//===MIDDLEWARE===//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//===PASSPORT===//
app.use(passport.initialize());
require('./controllers/passport')(passport);

//===ROUTES===//
app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to the Backend Server' });
});
const users = require('./routes/auth/users');
const notes = require('./routes/notes');

app.use('/auth/users', users);
app.use('/notes', notes);

app.listen(PORT, () => {
  console.log(chalk.cyanBright(`Server started on PORT:${PORT}`));
});
