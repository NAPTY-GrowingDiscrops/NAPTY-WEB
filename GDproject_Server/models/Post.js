module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'post',
    timestamps: true,
  });

  return Post;
}