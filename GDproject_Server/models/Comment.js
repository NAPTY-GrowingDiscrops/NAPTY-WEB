module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
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
    userName: {
      field: 'user_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      field: 'comment',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createAt: {
      field: 'create_at',
      type: DataTypes.TIME,
      allowNull: true,
    },
  }, {
    tableName: 'comment',
    timestamps: false,
  });

  return Comment;
}