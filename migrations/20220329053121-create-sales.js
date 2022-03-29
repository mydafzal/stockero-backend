'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sale', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productID: {
        type: Sequelize.INTEGER
      },
      sellerID: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      paymentStatus: {
        type: Sequelize.STRING
      },
      deliveryStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sale');
  }
};