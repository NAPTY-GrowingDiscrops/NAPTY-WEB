module.exports = (sequelize, DataTypes) => {
    const Scomment = sequelize.define('Scomment', {
        idx: {
            field: 'idx',
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment: {
            field: 'comment',
            type: DataTypes.STRING,
            allowNull: false
        },
        postIdx: {
            field: 'post_idx',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            field: 'user_id',
            type: DataTypes.STRING,
            allowNull: false
        },
        createAt: {
            field: 'create_at',
            type: DataTypes.DATATIME
        },
    }, {
        tableName: 'game_post_comment',
    });

    return Gcomment;
}