const router = require('express').Router();

const postCtrl = require('./post.Ctrl');

router.get('/read/list', postCtrl.getPosts);
router.get('/read/:idx', postCtrl.getPost);

router.post('/create', postCtrl.createPost);

router.put('/modifyPost', postCtrl.modifyPost);

router.post('/like', postCtrl.like);
router.post('/hate', postCtrl.hate);

module.exports = router;