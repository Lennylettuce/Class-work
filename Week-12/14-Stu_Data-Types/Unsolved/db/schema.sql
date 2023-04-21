DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

/*cannot default a column with autofill/auto increment attr*/
CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  value_card_member BOOLEAN
);
