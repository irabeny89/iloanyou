import { randomBytes } from "crypto";
import { JwtPayload, verify } from "jsonwebtoken";
import { env, genericErrorMessages, passwordHashLength } from "../../../config";
import UserCredential from "../../../db/models/user_credential_model";
import User from "../../../db/models/user_model";
import UserWallet from "../../../db/models/user_wallet_model";
import {
  StatusEnum,
  QueryResolvers,
  QuerySignupArgs,
  ResponseMetaData,
} from "../../../__generated__/resolvers-types";
import { AccessTokenPayloadT } from "../../gql_common_type";
import { OtpPayloadT } from "./getSignupOtp";

const EMAIL_MISMATCH_ERRROR_MESSAGE = "Email mismatch";

const getResponse = async ({
  email,
  password,
  username,
  otp,
}: QuerySignupArgs["signupInput"]) => {
  UserCredential.validatePassword(password);

  const otpPayload = verify(otp, env.jwtSecret!) as OtpPayloadT & JwtPayload;

  if (otpPayload.email !== email)
    throw new Error(EMAIL_MISMATCH_ERRROR_MESSAGE);

  const salt = randomBytes(passwordHashLength).toString("hex");
  const hashedPassword = await UserCredential.hashPassword(password, salt);

  // create documents without save
  const user = new User({ email, username });
  const userCredential = new UserCredential({
    hashedPassword,
    salt,
    user: user._id,
  });
  const userWallet = new UserWallet({ user: user._id });

  // create documents in transaction session
  // if any one fails then they all fail
  const session = await User.startSession();
  session.startTransaction();

  await user.save({ session });
  await userCredential.save({ session });
  await userWallet.save({ session });

  await session.commitTransaction();
  await session.endSession();

  return {
    responseMetaData: {
      code: 200,
      status: StatusEnum.Ok,
      message: "Welcome, signup successful.",
    },
    signupReturnData: {
      accessToken: UserCredential.createAccessToken({
        userId: user._id + "",
        username,
        email,
        role: userCredential.role as AccessTokenPayloadT["role"],
      }),
    },
  };
};

const getErrorResponse = (error: any) => {
  const errorMessage = (error.message as string) ?? "";

  // create client error repsonse meta data
  const emailMissmatchError: ResponseMetaData = {
    code: 400,
    status: StatusEnum.ClientError,
    message: errorMessage,
  };
  const otpExpiredError: ResponseMetaData = {
    code: 400,
    status: StatusEnum.ClientError,
    message: "OTP expired",
  };
  const invalidOtpError: ResponseMetaData = {
    code: 400,
    status: StatusEnum.ClientError,
    message: errorMessage,
  };

  // map all client error
  const clientErrorTemplate: { [k: string]: ResponseMetaData } = {
    [EMAIL_MISMATCH_ERRROR_MESSAGE]: emailMissmatchError,
    "jwt expired": otpExpiredError,
    "invalid OTP": invalidOtpError,
  };

  return {
    signupReturnData: null,
    responseMetaData:
      errorMessage in clientErrorTemplate
        ? clientErrorTemplate[errorMessage]
        : genericErrorMessages.ERROR_5xx,
  };
};

const signup: QueryResolvers["signup"] = {
  resolve: (_, { signupInput }) =>
    getResponse(signupInput).catch(getErrorResponse),
};

export default signup;
