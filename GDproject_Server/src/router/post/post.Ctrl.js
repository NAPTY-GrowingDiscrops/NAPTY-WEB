const models = require('../../../models');

module.postPost = async (req, res) => {
    const { body } = req;

    try {
        await models.Gpost.create({
            title: body.title,
            content: body.content,
            userName: body.userName,
            userId: body.userId,
            createAt: body.createAt,
        });

        return res.status(200).json({
            message: '게시 성공',
        });
        
    } catch ( err ) {
        console.log(err);
        return res.status(500).json({
            message: '서버 오류',
        });
    }
}