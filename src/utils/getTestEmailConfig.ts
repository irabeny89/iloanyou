import { createTestAccount } from "nodemailer";

/**
 * Returns a config to be used with the nodemailer transport
 * @returns email server config
 */
export default async function getTestEmailConfig() {
  const testAccount = await createTestAccount();

  return {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  };
}
