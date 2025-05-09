// Get the client
import mysql from "mysql2/";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const helloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
const handleBook = (req, res) => {
  return res.render("book.ejs");
};
const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  try {
    connection.query("SELECT * FROM users"),
      function (err, result, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      };
  } catch (err) {
    console.log(err);
  }

  console.log(",,", req.body);
  return res.send("message");
};
module.exports = {
  helloWorld,
  handleUserPage,
  handleBook,
  handleCreateNewUser,
};
//controller chua function
