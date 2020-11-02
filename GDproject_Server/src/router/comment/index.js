const router = require('express').Router();
const commentCtrl = require('./Comment.Ctrl');

router.post('/create/:idx', commentCtrl.createComment);
// router.post('/delete', commentCtrl.deleteComment);

module.exports = router;