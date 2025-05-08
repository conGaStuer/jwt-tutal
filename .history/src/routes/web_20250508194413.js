import express from "express";

const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initRouter = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello world");
  });

  return app.use("/", router);
};
export default initRouter;
