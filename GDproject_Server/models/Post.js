module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.STRING,
      allowNull: false,
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
    view: {
      field: 'view',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now,
    },
  }, {
    tableName: 'post',
    timestamps: false,
  });

  return Post;
}