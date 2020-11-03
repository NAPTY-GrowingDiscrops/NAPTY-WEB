const models = require('../../../../models');

const modifyComment = async(req, res) => {
    const { body, user } = req;
    const { idx } = req.params;

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

        if (!(comment.userId == user.id)) {
            return res.status(401).json({
                message: "자신의 댓글이 아닙니다",
            });
        }

        await models.Comment.update(body, {
            where: {
                idx: idx,
            },
        });

        return res.status(200).json({
            message: "댓글 수정 완료"
        });

    } catch (err) {
        console.loq(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = modifyComment;