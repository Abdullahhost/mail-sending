


import express from "express";
import { sendMailOptions } from "../controller/index.js";

const router = express.Router();

router.post("/", sendMailOptions);

export default router;
