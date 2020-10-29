const models = require('../../models');
const secretObjA = require('../config/jwtAuth');

const jwt = require('jsonwebtoken'); 

module.exports = async (req, res, next) => {
    const cookie = req.cookies.auth;

    if (!cookie) {
        next();
    } else {
        const decoded = jwt.verify(cookie, secretObjA.secret);
        const user = await models.User.findOne({
            where: {
                id: decoded.id,
            },
            raw: true,
        });

        req.user = user;
        next();

    }
}