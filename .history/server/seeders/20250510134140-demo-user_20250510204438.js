"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "John Doe",
          password: "123",
          username: "faker1",
        },
        {
          email: "John Doe22",
          password: "123",
          username: "faker12",
        },
        {
          email: "John Doe221",
          password: "123",
          username: "faker13",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("People", null, {});
  },
};
