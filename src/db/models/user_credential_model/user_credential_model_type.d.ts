import type { UserDbDataT } from "../user_model/user_model_type";
import { Model } from "mongoose";

type CreateOtpArgsT = Record<"username" | "email" | "hashedPassword", string>;

type UserCredentialRoleOptionT = "user" | "admin";

type UserCredentialDbDataT = {
  user: UserDbDataT;
  hashedPassword?: string;
  salt?: string;
  role?: UserCredentialRoleOptionT;
} & TimestampsAndIdT;

type UserCredentialVirtualT = {
  password: string;
};

type UserCredentialStaticT = {
  validatePassword: (password: string) => boolean;
  hashPassword: (password: string, salt: string) => Promise<string>;
  createOtp: (payload: CreateOtpArgsT) => string;
};

type UserCredentialMethodT = {
  verifyPassword: (password: string) => Promise<boolean | undefined>;
};

type UserCredentialModelT = Model<
  UserCredentialDbDataT,
  {},
  UserCredentialMethodT,
  UserCredentialVirtualT
> &
  UserCredentialStaticT;
