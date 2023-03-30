import { Model } from "mongoose";

export type UserDbDataT = {
  email: string;
  username: string;
};

export type UserModelT = Model<UserDbDataT> & UserStaticT;
