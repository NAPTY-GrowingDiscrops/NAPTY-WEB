const models = require('../../../../models');

exports.idCheck = async (req, res) => {
    const { body } = req;

    try {

        const user = await models.User.findOne({
            where: {
                id: body.id,
            },
        });

        if (user) {
           return res.status(401).json({
                message: "중복된 ID입니다.",
           });
        }

        return res.status(200).json({
            message: "사용할 수 있는 ID입니다!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}