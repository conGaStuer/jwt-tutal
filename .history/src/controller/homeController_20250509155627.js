const helloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
const handleBook = (req, res) => {
  return res.render("book.ejs");
};
const handleCreateNewUser = (req, res) => {};
module.exports = {
  helloWorld,
  handleUserPage,
  handleBook,
  handleCreateNewUser,
};
//controller chua function
