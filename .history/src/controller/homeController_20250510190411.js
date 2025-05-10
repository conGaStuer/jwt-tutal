import userService from "../service/userService";
const helloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  return res.render("user.ejs", { userList });
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
  return res.redirect("/user");
};
const handleDeleteUser = async (req, res) => {
  await userService.deleteUSer(req.params.id);
  return res.redirect("/user");
};
module.exports = {
  helloWorld,
  handleUserPage,
  handleBook,
  handleCreateNewUser,
  handleCreateNewBook,
  handleDeleteUser,
  getUpdateUser,
};
//controller chua function
