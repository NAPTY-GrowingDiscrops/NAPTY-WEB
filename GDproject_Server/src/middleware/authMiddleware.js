const models = require('../../models');
const secretObjA = require('../config/jwtAuth');

const jwt = require('jsonwebtoken'); 

module.exports = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        next();
    } else {
        const decoded = jwt.verify(token, secretObjA.secret);

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

