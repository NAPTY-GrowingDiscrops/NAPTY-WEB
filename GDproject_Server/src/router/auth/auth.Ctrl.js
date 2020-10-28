const models = require('../../../models');

const sequelize = require('sequelize');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const secretObj = require('../../config/jwt');

const op = sequelize.Op;

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
        secretObj.secert, {
            expiresIn: '30m'
        });

        const mailOption = {
            from: 'mailverify1234@gmail.com',
            to: email,
            subject: 'Growing Discrops메일 인증을 해주세요!',
            html: ' <center> <p>아래의 링크를 클릭하여 email인증을 해주세요!</p> <br/>' + "<a href='http://10.80.161.119:8000/api/email/mailCheck/?email="+ "token=" + token + "'>인증하기</a> <br/>" + "<p>만약 자신이 요청한 것이 아니면</p> <a href='https://www.facebook.com/profile.php?id=100010144092898'>FaceBook</a>" + "<p>로 문의주세요</p>",
        };

        transporter.sendMail(mailOption, function(err, info) {
            if (err){
                console.log(err);
            } else {
                console.log('Email send: ' = info.response);
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
    const token = req.query.token;
    const emailDecode = jwt.verify(token, secretObj.secert); 

    try {

        const email = await models.User.findOne({
            where: {
                email: emailDecode,
            },
        });

        if (!email) {
            return res.status(401).json({
                message: "잘못된 요청입니다.",
            });
        }

        await models.User.update({
            verify: true,
        }, {
            where: {
                email,
            },
        });

        return res.sendFile('../../../public/mailCheck.html');

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}