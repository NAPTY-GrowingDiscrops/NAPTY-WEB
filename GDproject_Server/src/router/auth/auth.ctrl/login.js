const models = require('../../../../models');
const secretObjA = require('../../../config/jwtAuth');

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
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

module.exports = login;