const router = require('express').Router();
const authCtrl = require('./auth.Ctrl');

router.post('/login', authCtrl.login);
router.post('/login/verifyCheck', authCtrl.verifyCheck)

router.post('/register', authCtrl.register);
router.post('/register/mailCheck', authCtrl.mailDupCheck);
router.post('/register/nameCheck', authCtrl.nameCheck);
router.post('/register/idCheck', authCtrl.idCheck);

router.post('/email/mailVerify', authCtrl.mailVerify);
router.get('/email/mailCheck', authCtrl.mailCheck);

module.exports = router;