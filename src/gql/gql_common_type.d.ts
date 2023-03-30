import { JwtPayload } from "jsonwebtoken";
import { UserCredentialDbDataT } from "../db/models/user_credential_model/user_credential_model_type";
import { UserDbDataT } from "../db/models/user_model/user_model_type";

export type GqlContextT = {
  token?: string;
};

export type AccessTokenPayloadT = Pick<UserDbDataT, "email" | "username"> & Record<"userId", string>
  & Pick<UserCredentialDbDataT, "role"> & JwtPayload