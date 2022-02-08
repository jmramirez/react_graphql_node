import { Model, DataTypes } from 'sequelize';


export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, { as: 'Posts', foreignKey: 'userId'})
    }
  }
  User.init({
    avatar: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};