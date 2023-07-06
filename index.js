const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "books_db"
});

connection.query("SELECT * FROM biographies", (err, data) => {
  if (err) return console.log(err);

  console.log(data);
});

function promptUser() {
  inquirer
    .prompt([
      {
        name: "title",
        message: "Enter the title of a biography:",
        validate: value => (value ? true : "Please enter the title of a biography.")
      }
    ])
    .then(answers => {
      const sql = `INSERT INTO biographies (name) VALUES ("${answers.title}")`;
      connection.query(sql, (err, result) => {
        if (err) return console.log(err);

        connection.query("SELECT * FROM biographies", (err, data) => {
          if (err) return console.log(err);

          console.log("Biography added!");
          console.log(data);
          connection.end();
        });
      });
    });
}

promptUser();
