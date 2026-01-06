const nodemailer = require("nodemailer");

const { BREVO_PASSWORD } = process.env;

// Використовуйте ці налаштування для Render
const nodemailerConfig = {
  host: "smtp-relay.brevo.com",
  port: 465, // Змінюємо з 587 на 465
  secure: true, // Для 465 порту обов'язково TRUE
  auth: {
    user: "moiseenkodmitriy@i.ua",
    pass: BREVO_PASSWORD,
  },
  // Додайте ці параметри, щоб уникнути проблем із сертифікатами на сервері
  tls: {
    rejectUnauthorized: false,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendVerifyEmail = async (data) => {
  try {
    const email = { ...data, from: "moiseenkodmitriy1177@gmail.com" };
    const info = await transport.sendMail(email);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error("NODEMAILER ERROR:", error.message);
    throw error; // Викидаємо помилку, щоб контролер її впіймав
  }
};

module.exports = { sendVerifyEmail };

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
