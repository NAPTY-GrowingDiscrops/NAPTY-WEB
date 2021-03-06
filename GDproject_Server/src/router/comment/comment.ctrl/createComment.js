const models = require('../../../../models');

const createComment = async (req, res) => {
    const { body, user } = req;
    const { idx } = req.params;
    
    if (!user) {
        return res.status(401).json({
            message: "로그인을 먼저 해주세요!",
        });
    }

    try {

        const post = await models.Post.findOne({
            where: {
                idx: idx,
            },
        });

        if (!post) {
            return res.status(404).json({
                message: "없는 게시글입니다",
            });
        }

        await models.Comment.create({
            postIdx: idx,
            userId: user.id,
            userName: user.name,
            content: body.content,
        });

        return res.status(200).json({
            message: "댓글 작성 성공!",
        });
 
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}

module.exports = createComment;