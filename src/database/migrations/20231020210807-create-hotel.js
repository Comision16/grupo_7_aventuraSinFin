'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countrieId: {
        type: Sequelize.INTEGER,
        references : {
          model: {
            tableName:'Countries'
          }
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references : {
          model: {
            tableName:'Products'
          }
        }
      },
      stay: {
        type: Sequelize.STRING
      },
      passengers: {
        type: Sequelize.INTEGER,
      },
      wifi: {
        type: Sequelize.BOOLEAN,
      },
      breakfast: {
        type: Sequelize.BOOLEAN,
      },
      parking: {
        type: Sequelize.BOOLEAN,
      },
      image: {
        type: Sequelize.STRING
      },
      checkInWeb: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.INTEGER
      },
      agencyId : {
        type: Sequelize.INTEGER,
        references : {
          model: {
            tableName:'Agencies'
          }
        }
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
    await queryInterface.dropTable('Hotels');
  }
};