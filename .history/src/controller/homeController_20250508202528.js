const helloWorld = (req, res) => {
  return res.send("Hello world from controller");
};

module.exports = {
  helloWorld,
};
