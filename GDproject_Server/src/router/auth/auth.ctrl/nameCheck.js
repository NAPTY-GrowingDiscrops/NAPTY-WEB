const models = require('../../../../models');

const nameCheck = async (req, res) => {
    const { body } = req;

    try {

        if (body.name.length >= 8) {
          return res.status(403).json({
            message: "닉네임은 7자리 이하여야 합니다.",
          });
        }

        const name = await models.User.findOne({
            where: {
                name: body.name,
            },
        });

        if (name) {
            return res.status(401).json({
                message: "이미 있는 닉네임입니다",
            });
        }

        return res.status(200).json({
            message: "사용할 수 있는 닉네임입니다!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = nameCheck;