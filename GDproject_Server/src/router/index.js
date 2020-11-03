const router = require('express').Router();

const auth = require('./auth');
const post = require('./post');
const comment = require('./comment');
const recomment = require('./recomment');

router.use('/auth', auth);
router.use('/post', post);
router.use('/comment', comment);
router.use('/recomment', recomment);

module.exports = router;