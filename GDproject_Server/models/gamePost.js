module.exports = (sequelize, DataTypes) => {
    const Gpost = sequelize.define('Gpost', {
        idx: {
            field: 'idx',
            type: DataTypes.INTGER,
            autoIncrement: true,
            primaryKey: true 
        },
        title: {
            field: 'title',
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            field: 'content',
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            field: 'user_name',
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            field: 'user_id',
            type: DataTypes.STRING,
            allowNull: false
        },
        createAt: {
            field: 'create_at',
            type: DataTypes.DATETIME
        },
    }, {
        tableName: 'game_post',
    });

    return Gpost;
}