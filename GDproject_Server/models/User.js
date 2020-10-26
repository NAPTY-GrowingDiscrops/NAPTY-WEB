module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            field: 'id',
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        pw: {
            field: 'pw',
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            field: 'email',
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            field: 'name',
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'user',
    });
    return User;
}