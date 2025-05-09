import bcrypt from "bcryptjs/dist/bcrypt";
import mysql from "mysql2/promise";

// create the connection to database
import bluebird from "bluebird";

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
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  //   let users = [];
  //    connection.query(
  //     "SELECT * FROM users",
  //     function (err, results, fields) {
  //       if (err) {
  //         console.log(err);
  //         return users;
  //       }
  //       users = results;
  //       return users;
  //     }
  //   );
  //const [a,v] = ... => ...= []
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    return rows;
    console.log(rows);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
};
