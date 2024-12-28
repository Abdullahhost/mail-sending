import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transporter = nodemailer.createTransport({
  secure: false,
  requireTLS: true,
  port: process.env.SMTP_PORT,
  service: "gmail",
  host: "smpt.gmail.com",
  auth: {
    user: process.env.SMTP_MAIL_ONE,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmailTemplate = async (
  userName,
  userEmail,
  userOrganization,
  userMessage,
  sendingEmail
) => {
  try {
    ejs.renderFile(
      path.join(__dirname, "../views/templates/email.ejs"),
      { userName, userEmail, userOrganization, userMessage, sendingEmail },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          var mailOptions = {
            to: sendingEmail
              ? process.env.SMTP_MAIL_ONE
              : [process.env.SMTP_MAIL_ONE, process.env.SMTP_MAIL],
            from: userEmail,
            subject: "Project collabrating with Mamun Hossain",
            html: data,
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log(`Message sent: %s`, info.messageId);
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// ? [process.env.SMTP_MAIL, process.env.SMTP_MAIL_ONE]
// : process.env.SMTP_MAIL_ONE,
