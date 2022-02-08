import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, { foreignKey: 'userId'})
      Message.belongsTo(models.Chat, { foreignKey: 'chatId'})
    }
  }
  Message.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    chatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};