module.exports = (sequelize, DataTypes) => {
  const Recomment = sequelize.define('recomment', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postIdx: {
      field: 'post_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commentIdx: {
      field: 'comment_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userName: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'recomment',
    timestamps: true,
  });

  return Recomment;
}