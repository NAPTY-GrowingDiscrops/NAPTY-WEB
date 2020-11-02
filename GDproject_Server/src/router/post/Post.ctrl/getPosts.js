const models = require('../../../../models');
const sequelie = require('sequelize');
const Op = sequelie.Op;

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

        for (const post of posts) {
            const 
        }

        for (const post of posts) {
            const postLike = await models.PostLike.findAll({
                where: {
                    postIdx: post.idx,
                },
                raw: true,
            });

            post.likeCount = postLike.length;
        }

        for (const post of posts) {
            const postHate = await models.PostHate.findAll({
                where: {
                    postIdx: post.idx,
                },
                raw: true,
            });

            post.HateCount = postHate.length;
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