const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3333;
const isProduction = process.env.PORT;
const connectionString = "mysql://kyoslnhxriwjsi6p:b8r4f8sbj1w8t3pq@acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/pu18reymzbigidh6";

const connection = mysql.createConnection(isProduction ? connectionString : {
  host: "127.0.0.1",
  user: "root",
  database: "books_db",
  multipleStatements: "true"
});

app.get("/", (clientReq, serverRes) => {
  const tableSQL = `
  DROP TABLE IF EXISTS biographies;
  CREATE TABLE biographies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    author VARCHAR(250),
  );

  INSERT INTO biographies (name, author) VALUES
    ("Titanic", "JP"),
    ("Another", "JP"),
    ("One More", "JP");
  `;

  connection.query(tableSQL, (err) => {
    if (err) throw err;

    connection.query("SELECT * FROM biographies", (err, data) => {
      if (err) return console.log(err);

      serverRes.send(data);
    });
  })
});


app.listen(PORT, () => console.log("Server started."));