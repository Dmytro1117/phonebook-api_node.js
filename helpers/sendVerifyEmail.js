const nodemailer = require("nodemailer");

const { GMAIL_USER } = process.env;
const { GMAIL_PASS } = process.env;

const nodemailerConfig = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendVerifyEmail = async (data) => {
  try {
    const email = {
      ...data,
      from: GMAIL_USER,
    };
    const result = await transport.sendMail(email);
    console.log("Email sent successfully via Gmail");
    return result;
  } catch (error) {
    console.error("GMAIL SMTP ERROR:", error.message);
    throw error;
  }
};

module.exports = { sendVerifyEmail };

// const nodemailerConfig = {
//   host: "smtp-relay.brevo.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "moiseenkodmitriy@i.ua",
//     pass: BREVO_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const sendVerifyEmail = async (data) => {
//   try {
//     const email = {
//       ...data,
//       from: "moiseenkodmitriy1177@6601244.brevosend.com",
//     };
//     const info = await transport.sendMail(email);
//     console.log("Email sent: " + info.response);
//     return true;
//   } catch (error) {
//     console.error("NODEMAILER ERROR:", error.message);
//     throw error;
//   }
// };

// module.exports = { sendVerifyEmail };

// const nodemailerConfig = {
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   // secure: true,
//   auth: {
//     user: "moiseenkodmitriy@i.ua",
//     pass: BREVO_PASSWORD,
//   },
//   // tls: {
//   //   rejectUnauthorized: false,
//   // },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const sendVerifyEmail = async (data) => {
//   try {
//     const email = { ...data, from: "moiseenkodmitriy1177@gmail.com" };
//     await transport.sendMail(email);
//     console.log("Email send success");
//     return true;
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// };

// const sendVerifyEmail = async (data) => {
//   try {
//     const email = { ...data, from: "moiseenkodmitriy1177@gmail.com" };
//     const result = await transport.sendMail(email);
//     console.log("Email sent successfully:", result.messageId);
//     return true;
//   } catch (error) {
//     console.error("NODEMAILER ERROR:", error.message);
//   }
// };

// module.exports = {
//   sendVerifyEmail,
// };
