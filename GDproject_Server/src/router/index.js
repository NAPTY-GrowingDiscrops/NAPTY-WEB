const router = require('express').Router();

const auth = require('./auth');
const post = require('./post');
const comment = require('./comment');

router.use('/auth', auth);
router.use('/post', post);
router.use('/comment', comment);

module.exports = router;