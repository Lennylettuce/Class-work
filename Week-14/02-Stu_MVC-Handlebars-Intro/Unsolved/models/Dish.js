// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.

// TODO: Add a comment indicating how this file fits into the MVC framework.
  //this file is part of the model, in how it holds the data that will be seen/manipulated by user
// TODO: What is it responsible for handling?
  //holds data seen/manipulated by user in Dish class that extends Model(sequalize obj)
  
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model {}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish',
  }
);

module.exports = Dish;
