DROP DATABASE IF EXISTS classlist_db;
CREATE DATABASE classlist_db;

USE classlist_db;
/*auto increment auto generates the id so you dont have to claim it in your values in seeds file*/
CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  enrolled BOOLEAN NOT NULL
);
