const router = require('express').Router();
const authCtrl = require('./auth.Ctrl');

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);

module.exports = router;