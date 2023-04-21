-- Write your Schema Here -- 
DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;
/*auto increment auto generates the id so you dont have to claim it in your values in seeds file*/
CREATE TABLE customers (
  id INT  AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active_order BOOLEAN NOT NULL
  PRIMARY KEY (id)
);

CREATE TABLE customers_orders (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  product_description VARCHAR(30) NOT NULL,
  order_status BOOLEAN NOT NULL
  FOREIGN KEY (customers_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);