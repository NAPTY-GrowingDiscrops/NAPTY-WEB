const router = require('express').Router();

const createRecomment = require('./recomment.ctrl/createRecomment');
const deleteRecomment = require('./recomment.ctrl/deleteRecomment');
const modifyRecomment = require('./recomment.ctrl/modifyRecomment');

router.post('/:idx', createRecomment);
router.delete('/:idx', deleteRecomment);
router.put('/:idx',modifyRecomment);

module.exports = router;