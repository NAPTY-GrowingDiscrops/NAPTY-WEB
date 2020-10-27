const router = require('express').Router();
const authCtrl = require('./auth.Ctrl');

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);

router.post('/mailCheck', authCtrl.mailCheck);
router.post('/nameCheck', authCtrl.nameCheck);
router.post('/idCheck', authCtrl.idCheck);

module.exports = router;