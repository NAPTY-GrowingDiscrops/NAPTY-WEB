const router = require('express').Router();

const postCtrl = require('./post.Ctrl');

router.post('/create', postCtrl.createPost);

module.exports = router;