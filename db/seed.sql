DROP DATABASE IF EXISTS project_tracker_db;

CREATE DATABASE project_tracker_db;

USE project_tracker_db;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL
);

INSERT INTO students (first_name, last_name) VALUES
  ("Sophie", "Scholl"),
  ("Hans", "Scholl"),
  ("Alexander", "Schmorell"),
  ("Christoph", "Probst"),
  ("Willi", "Graf"),
  ("Kurt", "Huber"),
  ("Carl", "Friedrich Goerdeler"),
  ("Marie", "Lange"),
  ("Elisabeth", "Schumacher"),
  ("Paul", "Reckzeh");

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(250) NOT NULL,
  completed BOOLEAN DEFAULT true,
  student_id INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id)
    ON DELETE CASCADE
);

INSERT INTO projects (project_name, completed, student_id) VALUES
    -- Student 1 (Sophie Scholl)
    ("Leaflet Distribution", true, 1),
    ("Resistance Pamphlets", false, 1),
    ("Literary Circle", true, 1),
    ("Anti-Nazi Propaganda", false, 1),
    ("Underground Printing Press", true, 1),

    -- Student 2 (Hans Scholl)
    ("Resistance Calendar", false, 2),
    ("Protest Posters", true, 2),
    ("Information Analysis", false, 2),
    ("Clandestine Food Network", true, 2),
    ("Covert Financial Tracking", false, 2),

    -- Student 3 (Alexander Schmorell)
    ("Codebreaking System", true, 3),
    ("Secret Messaging App", false, 3),
    ("Black Market Operations", true, 3),
    ("Resistance Task Management", false, 3),
    ("Weather Intelligence", true, 3),

    -- Student 4 (Christoph Probst)
    ("Underground Food Distribution", true, 4),
    ("Expense Tracking System", false, 4),
    ("Resistance Chatbot", true, 4),
    ("Fitness Training Program", false, 4),
    ("Covert Online Marketplace", true, 4),

    -- Student 5 (Willi Graf)
    ("Secret E-commerce Network", false, 5),
    ("Underground Music Streaming", true, 5),
    ("Resistance Calendar", false, 5),
    ("Clockwork Sabotage", true, 5),
    ("Undercover Social Media Analysis", false, 5),

    -- Student 6 (Kurt Huber)
    ("Covert Music Streaming App", true, 6),
    ("Calendar Encryption", false, 6),
    ("Stealthy Clock Design", true, 6),
    ("Underground Social Media Analysis", false, 6),
    ("Expense Tracking System", true, 6),

    -- Student 7 (Carl Friedrich Goerdeler)
    ("Chatbot Intelligence", false, 7),
    ("Covert Fitness Tracking", true, 7),
    ("Resistance Marketplace", false, 7),
    ("Underground Task Management", true, 7),
    ("Weather Forecasting Network", false, 7),

    -- Student 8 (Marie Lange)
    ("Book Recommendations", true, 8),
    ("Covert E-commerce Network", false, 8),
    ("Resistance Music Streaming", true, 8),
    ("Underground Calendar App", false, 8),
    ("Stealthy Social Media Analysis", true, 8),

    -- Student 9 (Elisabeth Schumacher)
    ("Expense Tracking System", false, 9),
    ("Resistance Chatbot", true, 9),
    ("Fitness Training App", false, 9),
    ("Underground Marketplace", true, 9),
    ("Covert Task Management", false, 9),

    -- Student 10 (Paul Reckzeh)
    ("Weather Forecasting Network", true, 10),
    ("Book Recommendations", false, 10),
    ("Covert E-commerce Network", true, 10),
    ("Resistance Music Streaming", false, 10),
    ("Calendar Encryption", true, 10);

SELECT
    CONCAT(first_name, " ", last_name) AS student_name,
    project_name,
    completed
        FROM students
        JOIN projects ON students.id = projects.student_id;