import { Model } from "mongoose";
import type { UserDbDataT } from "../user_model/user_model_type";

type UserWalletDbDataT = {
  user: UserDbDataT;
  balance: number;
} & TimestampsAndIdT;

type UserWalletModelT = Model<UserWalletDbDataT>;
