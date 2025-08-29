import express from "express";
require("dotenv").config();
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 8080;
//config view engine
configViewEngine(app);
//config body body-parser

//init web route
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">> JWT backend is running on the port =" + PORT);
});
