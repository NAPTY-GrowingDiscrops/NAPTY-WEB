const models = require('../../../models');
const secretObjM = require('../../config/jwtMail');
const secretObjA = require('../../config/jwtAuth');

const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { body } = req;

    try {

        const user = await models.User.findOne({
            where: {
                id: body.id,
                pw: body.pw,
            },
        });

        if (!user) {
            return res.status(401).json({
                message: "ID나 비밀번호를 확인해 주세요!",
            });
        }
        
        const tokenA = jwt.sign({
            id: user.id,
        },
        secretObjA.secret, {
            expiresIn: '30d',
        });

        return res.status(200).cookie('auth', tokenA).json({
            message: "로그인 성공",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.verifyCheck = async (req, res) => {
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
    const email = req.body.email;

    try {

        const check = await models.User.findOne({
            where: {
                email: email,
            },
        });

        if (!check) {
            return res.status(401).json({
                message: "존재하지 않는 email입니다",
            });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mailverify1234@gmail.com',
                pass: 'wndqls4337'
            }
        });

        const token = jwt.sign({
            email: email,
        },
        secretObjM.secret, {
            expiresIn: '30m'
        });

        const mailOption = {
            from: 'mailverify1234@gmail.com',
            to: email,
            subject: 'Growing Discrops메일 인증을 해주세요!',
            html: ' <center> <p>아래의 링크를 클릭하여 email인증을 해주세요!</p> <br/>' + "<a href='http://10.80.161.119:8080/auth/email/mailCheck/?tokenM=" + token + "'>인증하기</a> <br/>" + "<p>만약 자신이 요청한 것이 아니면</p> <a href='https://www.facebook.com/profile.php?id=100010144092898'>FaceBook</a>" + "<p>로 문의주세요</p>",
        };

        transporter.sendMail(mailOption, function(err, info) {
            if (err){
                console.log(err);
            } else {
                console.log('Email send: ' + info.response);
            }
        });

        return res.status(200).json({
            message: "메일 발송 성공!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

exports.mailCheck = async (req, res) => {
    const tokenM = req.query.tokenM;
    const emailDecoded = jwt.verify(tokenM, secretObjM.secret); 

    try {

        const email = await models.User.findOne({
            where: {
                email: emailDecoded.email,
            },
        });

        if (!email) {
            return res.status(401).json({
                message: "잘못된 요청입니다.",
            });
        }

        await models.User.update({
            emailReq: true,
        }, {
            where: {
                email: emailDecoded.email,
            },
        });

        return res.status(200).sendFile('mailCheck.html', {
            'root': 'src/public/mail'
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }

}
