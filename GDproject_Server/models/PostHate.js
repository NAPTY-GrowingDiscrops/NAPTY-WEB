module.exports = (sequelize, DataTypes) => {
  const PostHate = sequelize.define('post_hate', {
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
    tableName: 'post_hate',
    timestamps: false,
  });

  return PostHate;
}