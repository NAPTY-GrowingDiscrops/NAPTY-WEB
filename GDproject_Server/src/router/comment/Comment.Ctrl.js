const models = require('../../../models');

exports.createComment = async (req, res) => {
    const { body, user } = req;
    const { idx } = req.params;

    if (!user) {
        return res.status(401).json({
            message: "로그인을 먼저 해주세요!",
        });
    }

    try {

        await models.Comment.create({
            postIdx: idx,
            userName: user.name,
            comment: body.comment,
        });

        return res.status(200).json({
            message: "댓글 작성 성공!",
        });
 
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.deleteComment = async (req, res) => {
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
        });;

        if (!(comment.userName == user.name)) {
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
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}