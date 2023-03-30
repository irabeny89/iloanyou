import { model, Schema } from "mongoose";
import {
  allowedPasswordLength,
  appName,
  availableUserRoles,
  env,
  passwordHashLength,
} from "../../../config";
import { scrypt } from "node:crypto";
import { promisify } from "node:util";
import Mail from "nodemailer/lib/mailer";
import { AccessTokenPayloadT } from "../../../gql/gql_common_type";
import { JwtPayload, sign, verify } from "jsonwebtoken";

const UserCredential = model(
  "UserCredential",
  new Schema(
    {
      user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
      hashedPassword: { type: String, required: true },
      salt: { type: String, required: true },
      role: { type: String, default: "user", enum: availableUserRoles },
    },
    {
      timestamps: true,
      statics: {
        /**
         * Hash a password with salt and return the hash.
         *
         * @param password password to hash
         * @param salt salt to hash with password
         * @returns hash stringified as hex
         */
        async hashPassword(password: string, salt: string): Promise<string> {
          const hash = await promisify(scrypt)(
            Buffer.from(password),
            Buffer.from(salt),
            passwordHashLength
          );

          return (hash as Buffer).toString("hex");
        },
        /**
         * Validates the password passes some checks. Throws an error if invalid or `true` if valid.
         *
         * @param password - password to validate
         * @returns true for valid or false for invalid
         */
        validatePassword(password: string): boolean {
          const errorMessage = `Number of letters in Password should be more than ${allowedPasswordLength - 1
            }`;

          if (password.length < allowedPasswordLength)
            throw new Error(errorMessage);
          else return true;
        },
        /**
         * Creates a nodemailer email object that can be used with the transport to send mails
         *
         * @param otp one time password
         * @param email email address of the recipient
         * @returns mail object data
         */
        getOtpVerificationMail: (otp: string, email: string): Mail.Options => ({
          subject: "Email Verification OTP",
          sender: appName,
          from: `${appName}@nodemailer.com`,
          to: email,
          html: `<h2>One Time Password</h2><p><code>${otp}</code><br/><br/>Send a mutation request - signupValidatedUser - with this OTP to complete signup.</p>`,
        }),
        /**
         * Creates a signed access token with the provided payload object
         * 
         * @param accessTokenPayload {AccessTokenPayloadT} - claims to sign with token
         * @returns a signed access token
         */
        createAccessToken: (accessTokenPayload: AccessTokenPayloadT): string => sign(accessTokenPayload, env.jwtSecret!, { expiresIn: "365d" }),
        /**
         * verifies and decode token and return its payload
         * 
         * @param token token to verify
         * @returns token payload
         */
        verifyAccessToken: (token: string) => verify(token, env.jwtSecret!) as unknown as AccessTokenPayloadT & JwtPayload
      },
    }
  )
);

export default UserCredential;
