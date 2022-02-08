'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(
        'SELECT id from "Users";',
    ).then((users) => {
        console.log(users)
        const usersRows = users[0];


        return queryInterface.bulkInsert(
            'Posts',
            [
                {
                    text: 'Lorem ipsum 1',
                    userId: usersRows[0].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    text: 'Lorem ipsum 2',
                    userId: usersRows[1].id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
