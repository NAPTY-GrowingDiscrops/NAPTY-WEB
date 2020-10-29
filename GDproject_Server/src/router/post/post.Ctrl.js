const models = require('../../../models');
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

exports.getPost = async (req, res) => {
    const idx = req.params.idx;

    try {

        const post = await models.Post.findOne({
            where: {
                idx: idx,
            },
            raw: true,
        });

        if (!post) {
            return res.status(401).json({
                message: "잘못된 요청입니다.",
            });
        }

        const postLike = await models.PostLike.findAll({
            where: {
                postIdx: post.idx,
            },
            raw: true,
        });

        post.liked = false;
        if (req.user) {
            for (const pl of postLike) {
                if (pl.userId == req.user.id) {
                    post.liked = true;
                    break;
                }
            }
        }

        post.likeCount = postLike.length;

        const postHate = await models.PostHate.findAll({
            where: {
                postIdx: post.idx,
            },
            raw: true,
        });

        post.hated = false;
        if (req.user) {
            for (const pl of postHate) {
                if (pl.userId == req.user.id) {
                    post.hated = true;
                    break;
                }
            }
        }
        post.hateCount = postHate.length;
        
        if (req.user) {

            if (req.user.name === post.userName) {
                post.modifyPost = true;
                post.deletePost = true;
            } else {
                post.modifyPost = false;
                post.deletePost = false;
            }

        } else {
            post.modifyPost = false;
            post.deletePost = false;
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

exports.modifyPost = async (req, res) => {
    const { body, user } = req;
    const { idx } = req.params;
    
    if (!user) {
            return res.status(401).json({
                message: '로그인 안됨',
            });
        }   

    try {

        await models.Post.update(body, {
            where: {
                idx: idx,
            }
        });

        const post = await models.Post.findOne({
            where: {
                idx: idx,
            },
        });

        if (!(post.userName === user.name)) {
            return res.status(409).json({
                message: "자신의 게시물이 아닌데요?",
                user,
                post,
            });
        }

        return res.status(200).json({
            message: "게시글 수정 성공!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.like = async (req, res) => {
    const { user } = req;
    const { postIdx } = req.query;

    try {

        if(!user) {
            return res.status(401).json({
                message: "먼저 로그인을 해 주세요!",
            });
        }

        const existLike = await models.PostLike.findOne({
            where: {
                postIdx,
                userId: user.id,
            },
            raw: true,
        });

        if (existLike) {
            return res.status(409).json({
                message: "이미 좋아요를 눌렀습니다.",
            });
        }

        await models.PostLike.create({
            postIdx,
            userId: user.id,
        });

        return res.status(200).json({
            message: "좋아요 성공!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.hate = async (req, res) => {
    const { user } = req;
    const { postIdx } = req.query;

    try {

        if (!user) {
            return res.status(401).json({
                message: "로그인 후 이용해주세요!",
            });
        }

        const existHate = await models.PostHate.findOne({
            where: {
                postIdx,
                userId: user.id,
            },
        });

        if (existHate) {
            return res.status(409).json({
                message: "이미 싫어요를 눌렀어요!",
            });
        }

        await models.PostHate.create({
            postIdx,
            userId: user.id,
        });

        return res.status(200).json({
            message: "싫어요 성공!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}