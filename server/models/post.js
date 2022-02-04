import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Post extends Model {
    static associate(models) {}
  }

  Post.init(
    { text: { type: DataTypes.TEXT } },
    { sequelize, modelName: 'Post' }
  );

  return Post;
};
