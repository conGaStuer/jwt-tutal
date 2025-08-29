import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();
/**
 *
 * @param {*} app : express app
 *
 * router (url tren website) => /user (web.js)
 * =>route =>controller Handle => render View
 */

const initWebRoutes = (app) => {
  router.get("/", homeController.helloWorld);
  router.get("/user", homeController.handleUserPage);
  router.get("/book", homeController.handleBook);
  router.post("/users/create-user", homeController.handleCreateNewUser);
  // duong dan goc => mac dinh tu localhost:8386/....
  return app.use("/", router);
};
export default initWebRoutes;
