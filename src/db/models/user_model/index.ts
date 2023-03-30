import { model, Schema } from "mongoose";

const User = model(
  "User",
  new Schema(
    {
      email: {
        type: String,
        trim: true,
        unique: true,
        match: /.+@.+\..+/,
        required: true,
        lowercase: true,
      },
      username: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true,
        unique: true,
      },
    },
    { timestamps: true }
  )
);

export default User;
