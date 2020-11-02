const router = require('express').Router();
const commentCtrl = require('./Comment.Ctrl');

router.post('/create', commentCtrl.createComment);
router.post('/delete', commentCtrl.deleteComment);

module.exports = router;