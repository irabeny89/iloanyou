import { ResponseMetaData, StatusEnum } from "../__generated__/resolvers-types";

/**
 * Creates common response meta data type errors for JSON web token errors
 * 
 * @param error error object
 * @returns common jwt error objects
 */
export default function createJwtErrorResponseMetaData(error: any) {
  const errorMessage = (error.message as string) ?? "";

  const jwtError: ResponseMetaData = {
    code: 401,
    status: StatusEnum.ClientError,
    message: errorMessage,
  };

  const tokenExpiredError: ResponseMetaData = {
    code: 401,
    status: StatusEnum.ClientError,
    message: errorMessage,
  };

  return {
    TokenExpiredError: tokenExpiredError,
    JsonWebTokenError: jwtError
  }
}