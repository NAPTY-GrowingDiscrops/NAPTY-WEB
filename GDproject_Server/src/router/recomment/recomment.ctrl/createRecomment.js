const models = require('../../../../models');

const createRecomment = async (req, res) => {
    const { body, user } = req;
    const { idx } = req.params;

    if (!user) {
        return res.status(401).json({
            message: "로그인을 먼저 해주세요!",
        });
    }

    try {

        const comment = await models.Comment.findOne({
            where: {
                idx: idx,
            },
        });

        if (!comment) {
            return res.status(404).json({
                message: "없는 댓글입니다",
            });
        }

        await models.Recomment.create({
            postIdx: comment.postIdx,
            commentIdx: comment.idx,
            userId: user.id,
            userName: user.name,
            content: body.content,
        });

        return res.status(200).json({
            message: "답글 게시 완료!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = createRecomment;