const models = require('../../../../models');

exports.mailDupCheck = async (req, res) => {
    const { body } = req;

    try {
        const email = await models.User.findOne({
            where: {
                email: body.email,
            },
        });

        if (email) {
            return res.status(401).json({
                message: "이미 있는 email입니다",
            });
        }

        return res.status(200).json({
            message: "사용할 수 있는 email입니다!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}