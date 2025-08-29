import bcrypt from "bcryptjs/dist/bcrypt";
import mysql from "mysql2/promise";

// create the connection to database
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPass = bcrypt.hashSync(userPassword, salt);
  return hashPass;
};
const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "INSERT INTO users (email,password,username) values (?,?,?)",
      [email, hashPass, username]
    );
  } catch (error) {
    console.log(error);
  }
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

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

const deleteUSer = async (id) => {
  //"DELETE FROM users "
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM users WHERE id =?",
      [id]
    );
    return rows;
    console.log(rows);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUSer,
};
