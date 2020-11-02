 const models = require('../../../../models');
 
 const register = async (req, res) => {
    const { body }  = req;

    try {

        await models.User.create({
            id: body.id,
            pw: body.pw,
            name: body.name,
            email: body.email,
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