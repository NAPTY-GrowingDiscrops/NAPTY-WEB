module.exports = (sequelize, DataTypes) => {
  const SPost = sequelize.define('spost', {
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
    createAt: {
      field: 'create_at',
      type: DataTypes.TIME,
      allowNull: true,
    },
  }, {
    tableName: 'spost',
    timestamps: false,
  });

  return SPost;
}