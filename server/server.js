const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
const users = require('./routes/auth/users');

//===MIDDLEWARE===//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//===ROUTES===//
app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to the Backend Server' });
});

app.use('/auth/users', users);

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
