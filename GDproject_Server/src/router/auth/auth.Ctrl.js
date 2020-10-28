const models = require('../../../models');

exports.login = async (req, res) => {
    const { body } = req;

    try {
        const user = await models.User.findOne({
            where: {
                id: body.id,
                pw: body.pw,
            },
        });

        if (user) {
            return res.status(200).json({
                message: "로그인 성공!",
            });
        }

        return res.status(401).json({
            message: "ID나 비밀번호를 확인해 주세요",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.register = async (req, res) => {
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

exports.mailCheck = async (req, res) => {
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

exports.nameCheck = async (req, res) => {
    const { body } = req;

    try {

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

exports.mailVerify = async (req, res) => {
    
}