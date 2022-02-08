import { Model, DataTypes} from 'sequelize';


export default (sequelize) => {
  class Chat extends Model {
    static associate(models) {
      Chat.belongsToMany(models.User, { through: 'users_chats'})
      Chat.hasMany(models.Message, { as: 'Messages', foreignKey: 'chatId'});
    }
  }
  Chat.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};