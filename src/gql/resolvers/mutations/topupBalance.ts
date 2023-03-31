import { MutationResolvers, MutationTopupBalanceArgs, ResponseMetaData, StatusEnum, TopupBalanceResponse } from "../../../__generated__/resolvers-types"
import { genericErrorMessages } from "../../../config";
import UserCredential from "../../../db/models/user_credential_model";
import UserWallet from "../../../db/models/user_wallet_model";
import createJwtErrorResponseMetaData from "../../../utils/createJwtErrorResponseMetaData";
import { GqlContextT } from "../../gql_common_type"

const getResponse = async ({ topupBalanceInput: { amount } }: MutationTopupBalanceArgs, { token }: GqlContextT): Promise<TopupBalanceResponse> => {
  const tokenPayload = UserCredential.verifyAccessToken(token!);

  const userWallet = await UserWallet
    .findOneAndUpdate(
      { user: tokenPayload.userId }, { $inc: { balance: amount } }
    ).exec()
  
  return {
    responseMetaData: {
      code: 200,
      status: StatusEnum.Ok,
      message: "Topup successful",
    },
    topupBalanceReturnData: {
      balance: userWallet?.balance ?? 0
    }
  }
}

const getErrorResponse = (error: any): TopupBalanceResponse => {
  const errorMessage = (error.message as string) ?? "";

  // create client error repsonse meta data here

  // map all client error
  const clientErrorTemplate: { [k: string]: ResponseMetaData } = {
    ...createJwtErrorResponseMetaData(error)
  };

  return {
    topupBalanceReturnData: null,
    responseMetaData:
      errorMessage in clientErrorTemplate
        ? clientErrorTemplate[errorMessage]
        : genericErrorMessages.ERROR_5xx,
  };
}

const topupBalance: MutationResolvers["topupBalance"] = {
  resolve: (_, args, context) => getResponse(args, context)
    .catch(getErrorResponse)
}

export default topupBalance