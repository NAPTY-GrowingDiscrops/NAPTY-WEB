const router = require('express').Router();

const checkComment = require('./comment.ctrl/checkComment');
const createComment = require('./comment.ctrl/createComment');
const deleteComment = require('./comment.ctrl/deleteComment');
const modifyComment = require('./comment.ctrl/modifyComment');

// router.post('/check/:idx', checkComment);
router.post('/create/:idx', createComment);

router.delete('/delete/:idx', deleteComment);
router.put('/modify/:idx', modifyComment);

module.exports = router;