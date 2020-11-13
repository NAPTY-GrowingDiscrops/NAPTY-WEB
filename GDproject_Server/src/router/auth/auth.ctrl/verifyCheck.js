const models = require('../../../../models');
const secretObjA = require('../../../config/jwtAuth');

const jwt = require('jsonwebtoken');

const verifyCheck = async (req, res) => {
    const { body } = req;

    if(!(body)) {
        return res.status(400).json({
            message: "토큰이 입력되지 않았습니다",
        });
    }

    try {
      const token = body.token;
      const decoded = jwt.verify(token, secretObjA.secret);

        const user = await models.User.findOne({
            where: {
                id: decoded.id,
            },
        });

        if (!user) {
            return res.status(401).json({
                message: "email을 잘못 입력하였습니다.",
            });
        }

        if (user.emailReq === false) {
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