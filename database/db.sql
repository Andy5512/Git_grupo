-- to create a new database
CREATE DATABASE deberjsmysql;

-- to use database
use deberjsmysql;

-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  direccion VARCHAR(50),
  telefono VARCHAR(10)
);

-- to show all tables
show tables;

-- to describe table
describe customer;

CREATE TABLE cliente (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  direccion VARCHAR(50)
);

-- to show all tables
show tables;

-- to describe table
describe cliente;