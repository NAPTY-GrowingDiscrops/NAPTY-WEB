const models = require('../../../models');
const sequelize = require('sequelize');
const op = sequelize.Op;

exports.getPosts = async (req, res) => {
    try {

        if (req.query.keyword) {
            const posts = models.Post.
        }

        return res.status(200).json({
            message: "게시글 목록 불러오기 성공!",
        });
    } catch ( err ) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.createPost = async (req, res) => {
    const { body } = req;

    try {
        await models.Post.create({
            title: body.title,
            content: body.content,
            userName: body.userName,
            userId: body.userId,
            createAt: body.createAt,
        });

        return res.status(200).json({
            message: '게시 성공',
        });
        
    } catch ( err ) {
        console.log(err);
        return res.status(500).json({
            message: '서버 오류',
        });
    }
}
