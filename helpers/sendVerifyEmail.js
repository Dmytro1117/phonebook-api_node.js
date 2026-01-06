const nodemailer = require("nodemailer");

const { BREVO_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp-relay.brevo.com",
  port: 465,
  secure: true,
  auth: {
    user: "moiseenkodmitriy@i.ua",
    pass: BREVO_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendVerifyEmail = async (data) => {
  try {
    const email = { ...data, from: "moiseenkodmitriy1177@gmail.com" };
    await transport.sendMail(email);
    console.log("Email send success");
    return true;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  sendVerifyEmail,
};
