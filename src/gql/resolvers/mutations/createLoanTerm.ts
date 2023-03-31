import { genericErrorMessages } from "../../../config";
import Loan from "../../../db/models/loan_model";
import UserCredential from "../../../db/models/user_credential_model";
import UserWallet from "../../../db/models/user_wallet_model";
import {
  MutationCreateLoanTermArgs,
  MutationResolvers,
  ResponseMetaData,
  StatusEnum,
} from "../../../__generated__/resolvers-types";
import { GqlContextT } from "../../gql_common_type";

const CREATE_LOAN_TERM_ERROR_MESSAGE =
  "Insufficient balance.";

const getResponse = async (
  {
    amount,
    deadline,
    loanee,
  }: MutationCreateLoanTermArgs["createLoanTermInput"],
  { token }: GqlContextT
) => {
  const tokenPayload = UserCredential.verifyAccessToken(token!);

  const userWallet = await UserWallet.findOne({ user: tokenPayload.userId }).exec()

  if (userWallet && (userWallet.balance > amount)) {
    const loanTerm = new Loan({
      amount,
      deadline: new Date(deadline),
      loaner: tokenPayload.userId,
      loanee,
    });

    await loanTerm.save();

    return {
      responseMetaData: {
        code: 200,
        status: StatusEnum.Ok,
        message: "Loan term created",
      },
      createLoanTermReturnData: {
        id: loanTerm.id,
        passkey: loanTerm.passkey,
      },
    };
  } throw new Error(CREATE_LOAN_TERM_ERROR_MESSAGE);
}

const getErrorResponse = (error: any) => {
  const errorMessage = (error.message as string) ?? "";

  // create client error repsonse meta data
  const forbiddenError: ResponseMetaData = {
    code: 403,
    status: StatusEnum.ClientError,
    message: errorMessage,
  };

  const insufficientBalanceError: ResponseMetaData = {
    code: 400,
    status: StatusEnum.ClientError,
    message: CREATE_LOAN_TERM_ERROR_MESSAGE,

  }

  // map all client error
  const clientErrorTemplate: { [k: string]: ResponseMetaData } = {
    "invalid token": forbiddenError,
    [CREATE_LOAN_TERM_ERROR_MESSAGE]: insufficientBalanceError
  };

  return {
    signupReturnData: null,
    responseMetaData:
      errorMessage in clientErrorTemplate
        ? clientErrorTemplate[errorMessage]
        : genericErrorMessages.ERROR_5xx,
  };
};

const createLoanTerm: MutationResolvers["createLoanTerm"] = {
  resolve: (_, { createLoanTermInput }, context) =>
    getResponse(createLoanTermInput, context).catch(getErrorResponse),
};

export default createLoanTerm;
