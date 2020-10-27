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
    emailReq: {
      field: 'email_req',
      type: DataTypes.BOOLEAN,
      allowNull: true, 
    },
    admin: {
      field: 'admin',
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return User;
}