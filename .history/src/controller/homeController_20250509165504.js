// Get the client
import mysql from "mysql2";
import bcrypt from "bcryptjs/dist/bcrypt";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});
const salt = bcrypt.genSaltSync(10);

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
  return res.send("message");
};
const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  let hashPass = bcrypt.hashSync(password, salt);
  console.log(hashPass);

  let check = bcrypt.compareSync(password, hashPass);
  console.log(check);
  // connection.query(
  //   "INSERT INTO users (email,password,username) values (?,?,?)",
  //   [email, password, username]
  // );

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
