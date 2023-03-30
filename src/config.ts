import dotenv from "dotenv";
import { StatusEnum } from "./__generated__/resolvers-types";

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV,
  localDbUri: process.env.MONGO_URI_COMPASS,
  remoteDbUri: process.env.MONGO_URI,
  snykToken: process.env.SNYK_TOKEN,
  jwtSecret: process.env.JWT_SECRET,
  nodemailerTransportConfig: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  },
};

export const appName = "iloanyou";

export const availableUserRoles = ["user", "admin"];

export const allowedPasswordLength = 8;

// should be 16 or more for security reasons
export const passwordHashLength = 32;

export const nodemailerAppLocalServerConfig = {
  host: "127.0.0.1",
  port: 1025,
  auth: {
    user: "project.1",
    pass: "secret.1",
  },
};

export const genericErrorMessages = {
  ERROR_5xx: {
    code: 500,
    status: StatusEnum.ServerError,
    message: "Something went wrong",
  },
};
