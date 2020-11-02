const models = require('../../../models');

exports.createComment = async (req, res) => {
    const { body, user } = req;

    try {


 
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}