import { Schema, model } from "mongoose";

const UserWallet = model(
  "UserWallet",
  new Schema(
    {
      user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
      balance: { type: Number, min: 0, default: 0 },
    },
    { timestamps: true }
  )
);

export default UserWallet;
