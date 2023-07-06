DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE biographies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    author VARCHAR(250),
);

INSERT INTO biographies (name, author) VALUES
    ("Titanic", "JP"),
    ("Another", "JP"),
    ("One More", "JP");