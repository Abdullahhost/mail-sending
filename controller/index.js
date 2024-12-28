import { sendEmailTemplate } from "../helper/index.js";

export const sendMailOptions = async (req, res) => {
  const { userName, userEmail, userOrganization, userMessage, sendingEmail } =
    req.body;

  try {
    await sendEmailTemplate(
      userName,
      userEmail,
      userOrganization,
      userMessage,
      sendingEmail
    );

    res.status(200).json({
      success: true,
      message: "Mail sent successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};
