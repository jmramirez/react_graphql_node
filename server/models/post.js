import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId'})
    }
  }

  Post.init(
    { text: { type: DataTypes.TEXT }, userId: { type: DataTypes.INTEGER } },
    { sequelize, modelName: 'Post' }
  );

  return Post;
};
