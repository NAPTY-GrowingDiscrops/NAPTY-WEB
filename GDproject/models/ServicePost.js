module.exports = (sequelize, DataTypes) => {
    const Spost = sequelize.define('Spost', {
        idx: {
            field: 'idx',
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            field: 'title',
            type: DataTypes.STRING,
            allowNull: false
        },
        question: {
            field: 'question',
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
            type: DataTypes.DATETIME,
        },
    }, {
        tableName: 'service_post',
    });

    return Spost;
}