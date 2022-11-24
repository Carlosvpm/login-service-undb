import { connectionBD } from "../database/connection.db.js";
import express from "express";
import bodyParser from "body-parser";
import router from "./routes.js";

const app = express();
app.use(bodyParser.json());
app.use(router);

app.listen(7777);

function main() {
  connectionBD();
}

main();

export default { app };
