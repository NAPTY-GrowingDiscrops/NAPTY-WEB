module.exports = (sequelize, DataTypes) => {
  const PostView = sequelize.define('post_view', {
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
    view: {
      field: 'view',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'post_view',
    timestamps: false,
  });

  return PostView;
}