import express from "express";
require("dotenv").config();
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connection from "./config/connectDb";
const app = express();
const PORT = process.env.PORT || 8080;
//config view engine
configViewEngine(app);
//config body body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection db
connection();
//init web route
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">> JWT backend is running on the port =" + PORT);
});
