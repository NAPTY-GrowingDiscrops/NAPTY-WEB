const router = require('express').Router();

const login = require('./auth.ctrl/login');
const verifyCheck = require('./auth.ctrl/verifyCheck');
const register = require('./auth.ctrl/register');
const mailDupCheck = require('./auth.ctrl/mailDupCheck');
const nameCheck = require('./auth.ctrl/nameCheck');
const emailCheck = require('./auth.ctrl/emailCheck');
const pwNormalization = require('./auth.ctrl/pwNormalization');
const mailVerify = require('./auth.ctrl/mailVerify');
const mailCheck = require('./auth.ctrl/mailCheck');

router.post('/login', login);
router.post('/login/verifyCheck', verifyCheck);

router.post('/register', register);
router.post('/register/mailCheck', mailDupCheck);
router.post('/register/nameCheck', nameCheck);
router.post('/register/emailCheck', emailCheck);
router.post('/register/pwNormalization', pwNormalization);

router.post('/email/mailVerify', mailVerify);
router.get('/email/mailCheck', mailCheck);

module.exports = router;