-- Write your schema here --
DROP DATABASE IF EXISTS products_db;
CREATE DATABASE products_db;

USE products_db;
/*auto increment auto generates the id so you dont have to claim it in your values in seeds file*/
CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN
);

CREATE TABLE category(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL
);

