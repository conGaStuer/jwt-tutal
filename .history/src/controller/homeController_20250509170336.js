import userService from "../service/userService";
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
  userService.createNewUser(email, password, username);
  return res.send("successful~~~~");
};
module.exports = {
  helloWorld,
  handleUserPage,
  handleBook,
  handleCreateNewUser,
  handleCreateNewBook,
};
//controller chua function
