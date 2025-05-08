import express from "express";

const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello world");
  });
  router.get("/about", (req, res) => {
    return res.send("Im moon");
  });
  // duong dan goc => mac dinh tu localhost:8386/....
  return app.use("/", router);
};
export default initWebRoutes;
