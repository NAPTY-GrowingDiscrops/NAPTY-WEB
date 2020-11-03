const router = require('express').Router();

const checkComment = require('./CommentCtrl/checkComment');
const createComment = require('./CommentCtrl/createComment');
const deleteComment = require('./CommentCtrl/deleteComment');
const modifyComment = require('./CommentCtrl/modifyComment');

// router.post('/check/:idx', checkComment);
router.post('/create/:idx', createComment);

router.delete('/delete/:idx', deleteComment);
router.put('/modify/:idx', modifyComment);

module.exports = router;