const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello, world!');
})

app.listen(3000, () => {
  console.log('server listening on port 3000');
})