const models = require('../../../../models');
const secretObjM = require('../../../config/jwtMail');

const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const mailVerify = async (req, res) => {
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
            html: ' <center> <p>아래의 링크를 클릭하여 email인증을 해주세요!</p> <br/>' + "<a href='http://10.80.161.119:8000/auth/email/mailCheck/?tokenM=" + token + "'>인증하기</a> <br/>" + "<p>만약 자신이 요청한 것이 아니면</p> <a href='https://www.facebook.com/profile.php?id=100010144092898'>FaceBook</a>" + "<p>로 문의주세요</p>",
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

module.exports = mailVerify;