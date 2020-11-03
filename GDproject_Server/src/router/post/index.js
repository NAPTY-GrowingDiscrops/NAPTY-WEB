const router = require('express').Router();

const getPosts = require('./Post.ctrl/getPosts');
const getPost = require('./Post.ctrl/getPost');
const createPost = require('./Post.ctrl/createPost');
const modifyPost = require('./Post.ctrl/modifyPost');
const deletePost= require('./Post.ctrl/deletePost');
const like = require('./Post.ctrl/like');
const hate = require('./Post.ctrl/hate');

router.get('/read/list', getPosts);
router.get('/read/:idx', getPost);

router.post('/create', createPost);

router.put('/modify/:idx', modifyPost);

router.delete('/delete/:idx', deletePost);

router.post('/like', like);
router.post('/hate', hate);

module.exports = router; 