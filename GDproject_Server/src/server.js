const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(authMiddleware);

const router = require('./router');

app.use('/static', express.static('public'));
app.use('/', router);

app.listen(8000, () => {
    console.log('Server is running at 8000');
})