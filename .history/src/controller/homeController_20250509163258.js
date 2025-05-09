// Get the client
import mysql from "mysql2";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

// execute will internally call prepare and query

const helloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
const handleBook = (req, res) => {
  return res.render("book.ejs");
};
const handleCreateNewBook = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.bookname;

  connection.query("INSERT INTO users(email,password,username) VALUES(?,?,?)", [
    email,
    password,
    username,
  ]);
};
const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  connection.query(
    "INSERT INTO users (email,password,username) values (?,?,?)",
    [email, password, username]
  );

  console.log(",,", req.body);
  return res.send("message");
};
module.exports = {
  helloWorld,
  handleUserPage,
  handleBook,
  handleCreateNewUser,
  handleCreateNewBook,
};
//controller chua function
