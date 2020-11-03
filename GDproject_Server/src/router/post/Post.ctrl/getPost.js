const models = require('../../../../models');
const encrypt = require('../../../config/encrypt');

const moment = require('moment');

const getPost = async (req, res) => {
    const { user } = req;
    const idx = req.params.idx;

    try {

        const post = await models.Post.findOne({
            where: {
                idx: idx,
            },
            raw: true,
        });

        if (!post) {
            return res.status(404).json({
                message: "잘못된 요청입니다.",
            });
        }

        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if (Array.isArray(ip)) {
            ip = ip[0];
        }

        const encryptedIp = encrypt(ip);

        const viewed = await models.View.findOne({
            where: {
                postIdx: post.idx,
                ip: encryptedIp,
            },
            order: [
                ['createdAt', 'DESC'],
            ],
            raw: true,
        });

        const currentTime = moment();

        if (!viewed || (viewed && currentTime.diff(moment(viewed.createdAt), 'minutes') > 60 )) {
            post.view += 1;
            
            await models.Post.update(post, {
                where: {
                    idx: post.idx,
                },
            });

            await models.View.create({
                postIdx: post.idx,
                ip:encryptedIp,
            });
        }

        const comment = await models.Comment.findAll({
            where: {
                postIdx: idx,
            },
        });

        const postLike = await models.PostLike.findAll({
            where: {
                postIdx: post.idx,
            },
            raw: true,
        });

        post.liked = false;
        if (user) {
            for (const pl of postLike) {
                if (pl.userId == user.id) {
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
                if (pl.userId == user.id) {
                    post.hated = true;
                    break;
                }
            }
        }
        post.hateCount = postHate.length;
        
        if (user) {

            if (user.name === post.userName) {
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
            comment,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }

}

module.exports = getPost;