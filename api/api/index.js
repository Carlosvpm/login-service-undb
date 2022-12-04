import { connectionBD } from "../database/connection.db.js";
import express from "express";
import bodyParser from "body-parser";
import router from "./src/routes.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(7777);

function main() {
  connectionBD();
}

main();

export default { app };
