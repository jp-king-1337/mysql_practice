DROP DATABASE IF EXISTS project_tracker_db;

CREATE DATABASE project_tracker_db;

USE project_tracker_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(250),
  last_name VARCHAR(250)
);

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(250) NOT NULL,
  completed BOOLEAN DEFAULT true,
  student_id INT NOT NULL,
  FOREIGN KEY student_id REFERENCES students(id)
    ON DELETE CASCADE
);