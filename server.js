import express from "express";
import {} from "dotenv/config";

import sendEmail from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8001;
app.use("/sendMail", sendEmail);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
