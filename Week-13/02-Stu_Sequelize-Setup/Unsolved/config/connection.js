const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(
  process.env.LIBRARY_USED,
  //can also add root as DB_USER
  'root',
  process.env.PASSWORD_IS,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
