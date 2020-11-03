const router = require('express').Router();

const getPosts = require('./post.ctrl/getPosts');
const getPost = require('./post.ctrl/getPost');
const createPost = require('./post.ctrl/createPost');
const modifyPost = require('./post.ctrl/modifyPost');
const deletePost= require('./post.ctrl/deletePost');
const like = require('./post.ctrl/like');
const hate = require('./post.ctrl/hate');

router.get('/', getPosts);
router.get('/:idx', getPost);

router.post('/', createPost);
router.put('/:idx', modifyPost);
router.delete('/:idx', deletePost);

router.post('/like', like);
router.post('/hate', hate);

module.exports = router; 