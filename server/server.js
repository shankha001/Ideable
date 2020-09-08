const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to the Backend Server' });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
