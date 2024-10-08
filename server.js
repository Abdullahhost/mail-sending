import express from "express";
import {} from "dotenv/config";

import cors from "cors";

import sendEmail from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://mamun-hossain.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8001;
app.use("/sendMail", sendEmail);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
