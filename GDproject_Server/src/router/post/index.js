const router = require('express').Router();
const postCtrl = require('./post.Ctrl');

router.post('/', postCtrl.postPost);

module.exports = router;