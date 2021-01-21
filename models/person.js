'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.InstitutionMembership);
      this.belongsTo(models.Account);
    }
  }
  Person.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};