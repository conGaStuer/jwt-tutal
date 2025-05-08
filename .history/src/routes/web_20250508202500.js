import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();
/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  router.get("/", homeController.helloWorld);
  router.get("/about", (req, res) => {
    return res.send("Im moon");
  });
  // duong dan goc => mac dinh tu localhost:8386/....
  return app.use("/", router);
};
export default initWebRoutes;
