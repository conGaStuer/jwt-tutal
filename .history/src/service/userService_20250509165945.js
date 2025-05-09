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
  return (hashPass = bcrypt.hashSync(userPassword, salt));
};
const handleCreateNewUser = () => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  let hashPass = hashUserPassword(password);

  connection.query(
    "INSERT INTO users (email,password,username) values (?,?,?)",
    [email, hashPass, username]
  );
};
