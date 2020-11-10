 const models = require('../../../../models');
 const encrypt = require('../../../config/encrypt');
 
 const register = async (req, res) => {
    const { body }  = req;

    if (!(body.id) || !(body.pw) || !(body.name) || !(body.email)) {
        return res.status(401).json({
            message: "하나라도 입력되지 않은 항목이 있습니다",
        });
    }

    try {

        const data = {
            id: encrypt(body.id),
            pw: encrypt(body.pw),
            name: body.name,
            email: body.email,
        }

        await models.User.create({
            id: data.id,
            pw: data.pw,
            name: data.name,
            email: data.email,
            emailReq: false,
        });

        return res.status(200).json({
            message: "회원가입 성공!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = register;