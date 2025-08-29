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
