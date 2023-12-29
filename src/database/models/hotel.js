'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hotel.belongsTo(models.Countrie, {
        as : 'countrie',
        foreignKey : 'countrieId'
      });
      Hotel.belongsTo(models.Agency, {
        as : 'agency',
        foreignKey : 'agencyId'
      });
      Hotel.hasMany(models.Image, {
        as : 'images',
        foreignKey: 'hotelId'
      })
    }
  }
  Hotel.init({
    productId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    passengers: DataTypes.INTEGER,
    stay: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN,
    parking: DataTypes.BOOLEAN,
    checkInWeb: DataTypes.BOOLEAN,
    agencyId : DataTypes.BOOLEAN,
    wifi : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};