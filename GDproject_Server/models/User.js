module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      field: 'id',
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile: {
      field: 'profile',
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return User;
}