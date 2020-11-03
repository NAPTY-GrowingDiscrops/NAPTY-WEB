const models = require('../../../../models');

const modifyRecomment = async(req, res) => {
    const { body, user } = req;
    const { idx } = req.params;

    if (!user) {
        return res.status(401).json({
            message: "로그인을 먼저 해주세요",
        });
    }

    try {

        const recomment = await models.Recomment.findOne({
            where: {
                idx: idx,
            },
        });

        if (!recomment) {
            return res.status(404).json({
                message: "없는 답글입니다.",
            });
        }

        if (!(recomment.userId == user.id)) {
            return res.status(409).json({
                message: "자신의 답글이 아닙니다",
            });
        }

        await models.Recomment.update(body, {
            where: {
                idx: idx,
            },
        });

        return res.status(200).json({
            message: "답글 수정 완료!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = modifyRecomment;