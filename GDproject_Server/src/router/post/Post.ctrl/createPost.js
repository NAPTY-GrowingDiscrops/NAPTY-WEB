const models = require('../../../../models');

const createPost = async (req, res) => {
    const { body, user } = req;

        try {

            if (!user) {
                return res.status(401).json({
                    message: "먼저 로그인을 해주세요!",
                });
            }

        await models.Post.create({
            title: body.title,
            content: body.content,
            userName: user.name,
            userId: user.id,
        });

        return res.status(200).json({
            message: '게시글 게시 성공',
        });
        
    } catch ( err ) {
        console.log(err);
        return res.status(500).json({
            message: '서버 오류',
        });
    }
}

module.exports = createPost;