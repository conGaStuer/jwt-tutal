const hashPass = () => {
  let hashPass = bcrypt.hashSync(password, salt);
  console.log(hashPass);

  let check = bcrypt.compareSync(password, hashPass);
  console.log(check);
};
