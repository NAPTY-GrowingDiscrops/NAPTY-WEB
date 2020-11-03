const router = require('express').Router();

const getPosts = require('./post.ctrl/getPosts');
const getPost = require('./post.ctrl/getPost');
const createPost = require('./post.ctrl/createPost');
const modifyPost = require('./post.ctrl/modifyPost');
const deletePost= require('./post.ctrl/deletePost');
const like = require('./post.ctrl/like');
const hate = require('./post.ctrl/hate');

router.get('/read/list', getPosts);
router.get('/read/:idx', getPost);

router.post('/create', createPost);

router.put('/modify/:idx', modifyPost);

router.delete('/delete/:idx', deletePost);

router.post('/like', like);
router.post('/hate', hate);

module.exports = router; 