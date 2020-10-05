-- Drops the db if it already exists --
DROP DATABASE IF EXISTS employeeTracker_db;
-- Create a database called employeeTracker_db 
CREATE DATABASE employeeTracker_db;

-- Use employeeTracker db for the following statements --
USE employeeTracker_db;

CREATE TABLE department (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INT AUTO_INCREMENT NOT NULL,
  -- Create a string column called "departmentName" --
departmentName VARCHAR(30),
  -- Set the id as this table's primary key
  PRIMARY KEY(id)
);

CREATE TABLE role (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INT AUTO_INCREMENT NOT NULL,
  -- Create a string column called "title" -
title VARCHAR(30),
  -- Create a decimal column called "salary" -
salary DECIMAL,
-- Create an int column called "department_id"
department_id INT,
  -- Set the id as this table's primary key
  PRIMARY KEY(id)
);

CREATE TABLE employee (
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INT AUTO_INCREMENT NOT NULL,
  -- Create a string column called "first_name" 
first_name VARCHAR(30),
  -- Create a string column called "last_name"
last_name VARCHAR(30),
--   Create an int column for role id
role_id INT,
--   Create an int column for manager id
manager_id INT,
  -- Set the id as this table's primary key
  PRIMARY KEY(id)
);