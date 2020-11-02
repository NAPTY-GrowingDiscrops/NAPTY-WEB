const models = require('../../../../models');

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