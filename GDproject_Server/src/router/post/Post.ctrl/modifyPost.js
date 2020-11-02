const models = require('../../../../models');

exports.modifyPost = async (req, res) => {
    const { body, user } = req;
    const { idx } = req.params;
    
    if (!user) {
            return res.status(401).json({
                message: '로그인 안됨',
            });
        }   

    try {
        
        const post = await models.Post.findOne({
            where: {
                idx: idx,
            },
        });

        if (!(post.userName === user.name)) {
            return res.status(409).json({
                message: "자신의 게시물이 아닌데요?",
            });
        }

        await models.Post.update(body, {
            where: {
                idx: idx,
            }
        });

        return res.status(200).json({
            message: "게시글 수정 성공!",
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "서버 오류",
        });
    }
}