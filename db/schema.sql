DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE biographies (
    id INT AUTO_INCREMENT,
    name VARCHAR(250),
    PRIMARY KEY(id)
);

INSERT INTO biographies (name) VALUES
    ("Titanic"),
    ("Another"),
    ("One More");