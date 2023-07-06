const mysql = require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "books_db"
});

function printAllBios() {
  connection.query("SELECT * FROM biographies", (err, data) => {
    if (err) return console.log(err);

    console.log(data);
    connection.end();
  });
}

inquirer.prompt([
  {
    name: "title",
    message: "Please provide a title for the biography."
  },
  {
    name: "author",
    message: "Please enter the author name."
  }
]).then((answerObj) => {
  // Query our db and insert a new row into the biographies table
  const sql = "INSERT INTO biographies (name, author) VALUES (?, ?)";

  connection.query(sql, [answerObj.title, answerObj.author], (err, result) => {
    if (err) return console.log(err);
    console.log("New bio with id of %s added successfully!\n", result.insertId);

    printAllBios();
  });
});