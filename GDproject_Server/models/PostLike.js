module.exports = (sequelize, DataTypes) => {
  const PostLike = sequelize.define('post_like', {
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
    userId: {
      field: 'user_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'post_like',
    timestamps: false,
  });

  return PostLike;
}