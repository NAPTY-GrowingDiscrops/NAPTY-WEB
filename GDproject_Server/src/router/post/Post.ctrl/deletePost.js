const models = require('../../../../models');

const deletePost = async (req, res) => {
    const { user } = req;
    const { idx } = req.params;
    
    if (!user) {
            return res.status(401).json({
                message: "먼저 로그인을 해주세요!",
            });
        }
    
    try {

        const post = await models.Post.findOne({
            where: {
                idx: idx,
            },
        });

        if (!post) {
            return res.status(404).json({
                message: "없는 게시글 입니다",
            });
        }

        if (!(post.userId === user.id)) {
            return res.status(403).json({
                message: "자신의 게시물이 아닌데요?",
            });
        }

        await models.Post.destroy({
            where: {
                idx: idx,
            },
        });

        await models.PostLike.destroy({
            where: {
                postIdx: idx,
            },
        });

        await models.PostHate.destroy({
            where: {
                postIdx: idx,
            },
        });

        await models.Comment.destroy({
            where: {
                postIdx: idx,
            },
        });

        await models.Recomment.destroy({
            where: {
                postIdx: idx,
            },
        });

        return res.status(200).json({
            message: "게시글 삭제 완료!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = deletePost;