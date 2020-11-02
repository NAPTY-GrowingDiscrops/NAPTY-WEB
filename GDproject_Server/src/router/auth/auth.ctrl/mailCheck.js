const models = require('../../../../models');
const secretObjM =require('../../../config/jwtMail');

const jwt = require('jsonwebtoken');

const mailCheck = async (req, res) => {
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

module.exports = mailCheck;