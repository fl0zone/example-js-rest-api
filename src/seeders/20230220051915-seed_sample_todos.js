'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('todo', [
      {
        title: 'Learn Node.js',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Learn Express.js',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkUpdate('todo', {
      title: 'UnLearn Node.js',
    }, {
      title: 'Learn Node.js',
    });
    
    await queryInterface.bulkUpdate('todo', {
      title: 'UnLearn Express.js',
    }, {
      title: 'Learn Express.js',
    });

  }
};
