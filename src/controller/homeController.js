const helloWorld = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
const handleBook = (req, res) => {
  return res.render("book.ejs");
};
module.exports = {
  helloWorld,
  handleUserPage,
  handleBook,
};
//controller chua function
