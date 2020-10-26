const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const auth = require('./auth');

app.use('/auth', auth);

app.listen(8080, () => {
    console.log('Server is running at 8080');
})