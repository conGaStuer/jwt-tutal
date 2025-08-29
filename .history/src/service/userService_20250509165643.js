import bcrypt from "bcryptjs/dist/bcrypt";

const salt = bcrypt.genSaltSync(10);

const hashPass = () => {
  let hashPass = bcrypt.hashSync(password, salt);
  console.log(hashPass);

  let check = bcrypt.compareSync(password, hashPass);
  console.log(check);
};
