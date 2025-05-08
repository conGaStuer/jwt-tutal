import express from "express";
/** express
 * @param {*} app - express app
 *
 */
const configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs"); //dung thu vien html qua ejs cho nodejs

  app.set("view", "./src/views"); // luu file o thu muc views
};

export default configViewEngine;
