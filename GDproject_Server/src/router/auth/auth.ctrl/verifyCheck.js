const models = require('../../../../models');

const verifyCheck = async (req, res) => {
    const { body } = req;

    try {

        const check = await models.User.findOne({
            where: {
                id: body.id,
            },
        });

        if (!check) {
            return res.status(401).json({
                message: "ID를 잘못 입력하였습니다.",
            });
        }

        if (check.emailReq === false) {
            return res.status(401).json({
                message: "이메일 인증이 되지 않은 계정입니다.",
            });
        }

        return res.status(200).json({
            message: "이메일 인증이 완료된 계정입니다!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = verifyCheck;