const models = require('../../../../models');

const deleteComment = async (req, res) => {
    const { user } = req;
    const { idx } = req.params;

    if (!user){
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
                message: "댓글이 없습니다.",
            });
        }

        if (!(comment.userId == user.id)) {
            return res.status(409).json({
                message: "자신의 댓글이 아닙니다.",
            });
        }

        await models.Comment.destroy({
            where: {
                idx: idx,
            },
        });

        return res.status(200).json({
            message: "댓글 삭제 완료!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = deleteComment;