// Get the client
import mysql from "mysql2";
import bcrypt from "bcryptjs/dist/bcrypt";
// create the connection to database
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

  bcrypt
    .genSalt(10)
    .then((salt) => {
      bcrypt.hash(password, salt).then((hashPassword) => {
        connection.query(
          "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
          [email, hashPassword, username],
          (err, results) => {
            if (err) {
              console.error(err);
              return res.status(500).send("Database error");
            }
            return res.send("User created successfully");
          }
        );
      });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Internal server error");
    });
};
module.exports = {
  helloWorld,
  handleUserPage,
  handleBook,
  handleCreateNewUser,
  handleCreateNewBook,
};
//controller chua function
