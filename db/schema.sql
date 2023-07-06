DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE biographies (
    id INT AUTO_INCREMENT,
    name VARCHAR(250),
    author VARCHAR(250),
    PRIMARY KEY(id)
);

INSERT INTO biographies (name, author) VALUES
    ("Titanic", "JP"),
    ("Another", "JP"),
    ("One More", "JP");