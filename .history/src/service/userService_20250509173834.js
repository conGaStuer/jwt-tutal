import bcrypt from "bcryptjs/dist/bcrypt";
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPass = bcrypt.hashSync(userPassword, salt);
  return hashPass;
};
const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password);

  connection.query(
    "INSERT INTO users (email,password,username) values (?,?,?)",
    [email, hashPass, username]
  );
};

const getUserList = async () => {
  let users = [];
  return connection.query(
    "SELECT * FROM users",
    function (err, results, fields) {
      if (err) {
        console.log(err);
        return users;
      }
      users = results;
      return users;
    }
  );
};

module.exports = {
  createNewUser,
  getUserList,
};
