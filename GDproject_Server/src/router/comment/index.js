const router = require('express').Router();

const checkComment = require('./CommentCtrl/checkComment');
const createComment = require('./CommentCtrl/createComment');
const deleteComment = require('./CommentCtrl/deleteComment');

router.post('/check/:idx', checkComment);
router.post('/create/:idx', createComment);

module.exports = router;