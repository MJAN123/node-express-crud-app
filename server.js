const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// Logger
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded);

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views/ejs'));

// load assets()
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));

app.get('/', (req, res) => {
  res.send('Crud App');
});

app.listen(PORT, () => {
  console.log('PORT is listening', 'color: #ff0000', PORT);
});
