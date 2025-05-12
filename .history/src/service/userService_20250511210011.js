import bcrypt from "bcryptjs/dist/bcrypt";
import mysql from "mysql2/promise";
import db from "../../server/models";
// create the connection to database
import bluebird from "bluebird";
import { where } from "sequelize/lib/sequelize";
import { raw } from "body-parser";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPass = bcrypt.hashSync(userPassword, salt);
  return hashPass;
};
const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);

  try {
    await db.User.create({
      username: username,
      password: hashPass,
      email: email,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserList = async () => {
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });

  //    connection.query(
  //     "SELECT * FROM user",
  //     function (err, results, fields) {
  //       if (err) {
  //         console.log(err);
  //         return user;
  //       }
  //       user = results;
  //       return user;
  //     }
  //   );
  //const [a,v] = ... => ...= []
  // try {
  //   const [rows, fields] = await connection.execute("SELECT * FROM user");
  //   return rows;
  //   console.log(rows);
  // } catch (error) {
  //   console.log(error);
  // }

  //test relationship

  let newUser = db.User.findOne({
    where: {
      id: 1,
    },
    raw: true,
  });

  let users = [];
  users = await db.User.findAll();
  return users;
};

const deleteUSer = async (userId) => {
  //"DELETE FROM user "
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "DELETE FROM user WHERE id =?",
  //     [id]
  //   );
  //   return rows;
  //   console.log(rows);
  // } catch (error) {
  //   console.log(error);
  // }
  await db.User.destroy({
    where: {
      id: userId,
    },
  });
};
const getUserById = async (id) => {
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "select * FROM user WHERE id =?",
  //     [id]
  //   );
  //   return rows;
  //   console.log(rows);
  // } catch (error) {
  //   console.log(error);
  // }

  //findAll []
  //findOne {}
  let user = await db.User.findOne({
    where: {
      id: id,
    },
  });
  //convert models to js object
  return user.get({ plain: true });
};
const updateUserInfo = async (email, username, id) => {
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "UPDATE user SET email = ? , username = ?  WHERE id =?",
  //     [email, username, id]
  //   );
  //   return rows;
  //   console.log(rows);
  // } catch (error) {
  //   console.log(error);
  // }
  let user = {};
  user = await db.User.update(
    { email: email, username: username },
    {
      where: {
        id: id,
      },
    }
  );
};
module.exports = {
  createNewUser,
  getUserList,
  deleteUSer,
  getUserById,
  updateUserInfo,
};
