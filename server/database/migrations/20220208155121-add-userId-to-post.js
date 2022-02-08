'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.addColumn('Posts','userId', { type: Sequelize.INTEGER});
    await queryInterface.addConstraint('Posts',{
      fields: ['userId'],
      type: 'foreign key',
      name: 'fk_user_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Posts', 'userId')
  }
};
