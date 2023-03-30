import { createTestAccount, createTransport } from "nodemailer";
// import dotenv from "dotenv"

// NOTICE!
// Using test account.
// Remember to reconfigure using an actual account eg GMail
// And remember to pass your credentials from
// a git ignored.env file.
// Do not expose your credentials.

// dotenv.config()
// const credentials = {
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   user: process.env.EMAIL_USER,
//   pass: process.env.EMAIL_PASS,
// }

async function getEmailTransport() {
  // NOTICE: remember to use real credentials
  // uncomment the dotenv & credentials above for real credentials
  const testCredentials = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: await createTestAccount(),
  };

  // reusable email SMTP(default) transport
  // refer to https://nodemailer.com for more info
  return createTransport(testCredentials);
}

export default getEmailTransport;
