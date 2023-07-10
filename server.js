const express = require("express");
const db = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 3333;


// Middleware
app.use(express.json()); // Allows the client/browser to send json in a request
app.use(express.static("public")); // Allows the client/browser to access any folders or files in public - opens this folder at the root

app.listen(PORT, () => console.log("Server started on port %s", PORT));