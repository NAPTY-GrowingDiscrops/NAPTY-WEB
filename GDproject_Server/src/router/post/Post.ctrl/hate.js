const models = require('../../../../models');

const hate = async (req, res) => {
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

module.exports = hate;