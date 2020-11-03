const router = require('express').Router();

const checkComment = require('./comment.ctrl/checkComment');
const createComment = require('./comment.ctrl/createComment');
const deleteComment = require('./comment.ctrl/deleteComment');
const modifyComment = require('./comment.ctrl/modifyComment');

// router.post('/check/:idx', checkComment);
router.post('/:idx', createComment);
router.delete('/:idx', deleteComment);
router.put('/:idx', modifyComment);

module.exports = router;