DROP DATABASE IF EXISTS burgerdb;

CREATE DATABASE burgerdb;

USE burgerdb;


CREATE TABLE burger (
  id int NOT NULL AUTO_INCREMENT,
  typeof varchar(255) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);
