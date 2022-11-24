import express from "express";
import { checkUser } from "./services/users.service.js";

const router = express.Router();

router.post("/user", async (request, res) => {
  console.log(request.body);
  checkUser(res, request.body);
});

export default router;
