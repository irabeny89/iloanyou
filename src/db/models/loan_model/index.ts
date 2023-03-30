import { randomBytes } from "crypto";
import { model, Schema } from "mongoose";

const Loan = model(
  "Loan",
  new Schema(
    {
      amount: {
        type: Number,
        required: true,
        lowercase: true,
        min: 0,
      },
      passkey: {
        type: String,
        default: () => randomBytes(4).toString("hex")
      },
      deadline: {
        type: Date,
        required: true,
      },
      isAccepted: {
        type: Boolean,
        default: false,
      },
      isAuthorized: {
        type: Boolean,
        default: false,
      },
      loaner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      loanee: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
    },
    { timestamps: true }
  )
);

export default Loan;
