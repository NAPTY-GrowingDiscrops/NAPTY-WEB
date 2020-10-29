const models = require('../../../models');
const authMiddleware = require('../../middleware/authMiddleware');

const sequelize = require('sequelize');

const Op = sequelize.Op;

exports.getPosts = async (req, res) => {
    keyword = req.query.keyword

    try {
        let posts = [];

        if(keyword) {

            posts = await models.Post.findAll({
                where: {
                    title: {
                        [Op.like]: "%" + keyword + "%",
                    },
                },
                order: [
                    ['createdAt', 'DESC'],
                ],
                raw: true,
            });

        } else {

            posts = await models.Post.findAll({
                order: [
                    ['createdAt', 'DESC'],
                ],
                raw: true,
            });

        }

        return res.status(200).json({
            message: "게시글 목록 불러오기 성공!",
            posts,
        });

    } catch ( err ) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.getPost = async (req, res) => {
    const idx = req.params.idx;

    try {

        const data = await models.User.findOne({
            where: {
                idx: idx,
            },
        });

        if (!data) {
            return res.status(401).json({
                message: "잘못된 요청입니다.",
            });
        }

        return res.status(200).json({
            message: "게시글 불러오기 성공!",
            post,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }

}

exports.createPost = async (req, res) => {
    const { body, user } = req;

        try {

            if (!user) {
                return res.status(401).json({
                    message: "먼저 로그인을 해주세요!",
                });
            }

        await models.Post.create({
            title: body.title,
            content: body.content,
            userName: user.name,
            userId: user.id,
        });

        return res.status(200).json({
            message: '게시글 게시 성공',
        });
        
    } catch ( err ) {
        console.log(err);
        return res.status(500).json({
            message: '서버 오류',
        });
    }
}
