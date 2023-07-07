DROP DATABASE IF EXISTS project_tracker_db;

CREATE DATABASE project_tracker_db;

USE project_tracker_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL
);

INSERT INTO students (first_name, last_name) VALUES
    ("John", "Doe"),
    ("Jane", "Smith"),
    ("Michael", "Johnson"),
    ("Emily", "Davis"),
    ("Daniel", "Wilson"),
    ("Olivia", "Thompson"),
    ("William", "Anderson"),
    ("Sophia", "Thomas"),
    ("James", "Roberts"),
    ("Ava", "Taylor");

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(250) NOT NULL,
    completed BOOLEAN DEFAULT true,
    student_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id)
        ON DELETE CASCADE
);

INSERT INTO projects (project_name, completed, student_id) VALUES
    -- Student 1 (John Doe)
    ("Clock Project", true, 1),
    ("Book Recommendation System", true, 1),
    ("E-commerce Website", false, 1),
    ("Music Streaming App", true, 1),

    -- Student 2 (Jane Smith)
    ("Calendar Application", false, 2),
    ("Clock Project Version 2.0", true, 2),
    ("Food Delivery App", true, 2),
    ("Expense Tracker", false, 2),

    -- Student 3 (Michael Johnson)
    ("Chatbot Development", true, 3),
    ("Fitness Tracking App", false, 3),
    ("Online Marketplace", true, 3),
    ("Task Management System", false, 3),

    -- Student 4 (Emily Davis)
    ("Food Delivery App", true, 4),
    ("Expense Tracker", false, 4),
    ("Chatbot Development", true, 4),
    ("Fitness Tracking App", false, 4),
    ("Online Marketplace", true, 4),

    -- Student 5 (Daniel Wilson)
    ("E-commerce Website", false, 5),
    ("Music Streaming App", true, 5),
    ("Calendar Application", false, 5),
    ("Social Media Analytics", false, 5),

    -- Student 6 (Olivia Thompson)
    ("Music Streaming App", true, 6),
    ("Calendar Application", false, 6),
    ("Clock Project", true, 6),
    ("Expense Tracker", true, 6),

    -- Student 7 (William Anderson)
    ("Chatbot Development", false, 7),
    ("Fitness Tracking App", true, 7),
    ("Online Marketplace", false, 7),

    -- Student 8 (Sophia Thomas)
    ("Book Recommendation System", true, 8),
    ("E-commerce Website", false, 8),
    ("Music Streaming App", true, 8),
    ("Social Media Analytics", true, 8),

    -- Student 9 (James Roberts)
    ("Expense Tracker", false, 9),
    ("Fitness Tracking App", false, 9),
    ("Online Marketplace", true, 9),

    -- Student 10 (Ava Taylor)
    ("Weather Forecasting App", true, 10),
    ("Book Recommendation System", false, 10),
    ("E-commerce Website", true, 10),
    ("Music Streaming App", false, 10),
    ("Calendar Application", true, 10);

SELECT
    CONCAT(first_name, " ", last_name) AS student_name,
    project_name,
    completed
        FROM students
        JOIN projects ON s.id = p.student_id;
