'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Person);
      this.hasMany(models.TournamentRole);
      this.hasMany(models.PersonalClash, {foreignKey: 'fromAccountId', onDelete: 'cascade', as: 'myClash'});
      this.hasMany(models.PersonalClash, {foreignKey: 'targetAccountId', onDelete: 'cascade', as: 'otherClash'});
    }
  }
  Account.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    pro: DataTypes.BOOLEAN,
    god: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};