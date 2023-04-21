DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;
/*AUTOINCREMENT solves the issue for this in a DRY-er way!*/
CREATE TABLE products(
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);
