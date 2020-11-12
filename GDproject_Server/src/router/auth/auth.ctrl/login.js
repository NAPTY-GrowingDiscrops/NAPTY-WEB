const models = require('../../../../models');
const secretObjA = require('../../../config/jwtAuth');
const encrypt = require('../../../config/encrypt');

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { body } = req;

    try {

        if (!(body.email) && !(body.pw)) {
            return res.status(400).json({
                message: "ID나 비밀번호를 입력해주세요",
            });
        }

        const data = {
            pw: encrypt(body.pw),
        };

        const user = await models.User.findOne({
            where: {
                email: body.email,
                pw: data.pw,
            },
        });

        if (!user) {
            return res.status(401).json({
                message: "ID나 비밀번호를 확인해 주세요!",
            });
        }
        
        const token = jwt.sign({
            id: user.id,
            name: user.name
        },
        secretObjA.secret, {
            expiresIn: '30d',
        });

        return res.status(200).json({
            message: "로그인 성공",
            token: {
                token,
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = login;