const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = require('./router');

app.use('/static', express.static('public'));
app.use('/', router);

app.listen(8080, () => {
    console.log('Server is running at 8080');
})