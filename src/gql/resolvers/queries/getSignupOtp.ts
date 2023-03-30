import { randomBytes } from "crypto";
import { sign } from "jsonwebtoken";
import { createTransport } from "nodemailer";
import {
  env,
  genericErrorMessages,
  nodemailerAppLocalServerConfig,
} from "../../../config";
import UserCredential from "../../../db/models/user_credential_model";
import {
  QueryResolvers,
  StatusEnum,
} from "../../../__generated__/resolvers-types";


// N.B: for development purpose we generated free email service
// for client to check their otp. Please use real config in production

export type OtpPayloadT = Record<"otp" | "email", string>

const getResponse = async (email: string) => {
  const otpPayload: OtpPayloadT = {
    otp: randomBytes(4).toString("hex"),
    email
  }

  await createTransport(nodemailerAppLocalServerConfig).sendMail(
    UserCredential
      .getOtpVerificationMail(
        // // 900 seconds === 15 minutes; 1 === 1 seconds
        sign(otpPayload, env.jwtSecret!, { expiresIn: 900 }),
        email
      )
  );

  return {
    responseMetaData: {
      code: 200,
      status: StatusEnum.Ok,
      message: "Check the test email for OTP to complete the signup.",
    },
    getSignupOtpReturnData: {
      testEmailMessageLink: "http://ethereal.email.com",
      testEmailPassword: "testpass",
      testEmailUsername: "testuser",
    },
  };
}

const getSignupOtp: QueryResolvers["getSignupOtp"] = {
  resolve: (_, { email }) => getResponse(email)
    .catch(() => ({
      responseMetaData: genericErrorMessages.ERROR_5xx,
      getSignupOtpReturnData: null
    }))
}

export default getSignupOtp;
