import { timingSafeEqual } from "crypto"
import { genericErrorMessages } from "../../../config"
import UserCredential from "../../../db/models/user_credential_model"
import User from "../../../db/models/user_model"
import { QueryResolvers, QuerySigninArgs, ResponseMetaData, StatusEnum } from "../../../__generated__/resolvers-types"
import { AccessTokenPayloadT } from "../../gql_common_type"

const SIGNIN_ERROR_MESSAGE = "Invalid email or password"

const comparePasswordAndGetAccessToken = async ({ password, salt, hashedPassword, username, role, email, userId }: Record<"password" | "salt" | "email" | "hashedPassword" | "username" | "role" | "userId", string>) => {
  if (timingSafeEqual(Buffer.from(await UserCredential.hashPassword(password, salt)), Buffer.from(hashedPassword))) {
    return {
      responseMetaData: {
        code: 200,
        status: StatusEnum.Ok,
        message: "Access token generated.",
      },
      signinReturnData: {
        accessToken: UserCredential.createAccessToken({
          userId,
          email,
          username,
          role: role as AccessTokenPayloadT["role"]
        })
      },
    };
  } throw new Error(SIGNIN_ERROR_MESSAGE)
}

const getResponse = async ({ email, password }: QuerySigninArgs["signinInput"]) => {
  const existingUser = await User.findOne({ email }).exec()

  if (existingUser) {
    const userCredential = await UserCredential.findOne({ user: existingUser._id }).exec()

    if (userCredential) {
      return await comparePasswordAndGetAccessToken({
        userId: existingUser._id + '',
        email,
        password,
        hashedPassword: userCredential.hashedPassword,
        salt: userCredential.salt,
        role: userCredential.role,
        username: existingUser.username
      })
    } throw new Error(SIGNIN_ERROR_MESSAGE)
  } throw new Error(SIGNIN_ERROR_MESSAGE)
}

const getErrorResponse = (error: any) => {
  const errorMessage = error.message as string ?? ""

  // create client error repsonse meta data
  const signInError: ResponseMetaData = {
    code: 403,
    status: StatusEnum.ClientError,
    message: errorMessage
  }

  // map all client error
  const clientErrorTemplate: { [k: string]: ResponseMetaData } = {
    [SIGNIN_ERROR_MESSAGE]: signInError
  }

  return {
    signinReturnData: null,
    responseMetaData: errorMessage in clientErrorTemplate ? clientErrorTemplate[errorMessage] : genericErrorMessages.ERROR_5xx
  }
}

const signin: QueryResolvers["signin"] = {
  resolve: (_, { signinInput }) => getResponse(signinInput)
    .catch(getErrorResponse)
}

export default signin;