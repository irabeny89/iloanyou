import { describe, it, expect } from "@jest/globals";
import { appName } from "../../config";
import UserCredential from "../../db/models/user_credential_model";

describe("User Credential Schema", () => {
  it("should have expected object data fields defined", () => {
    expect("user" in UserCredential.schema.obj).toBeTruthy();
    expect("hashedPassword" in UserCredential.schema.obj).toBeTruthy();
    expect("salt" in UserCredential.schema.obj).toBeTruthy();
    expect("role" in UserCredential.schema.obj).toBeTruthy();
  });

  it("should have timestamps option set to true", () => {
    expect(UserCredential.schema.get("timestamps")).toBeTruthy();
  });

  it("should have hashPassword static method defined", () => {
    expect("hashPassword" in UserCredential.schema.methods).toBeDefined();
  });

  it("should have validatePassword static method defined", () => {
    expect("validatePassword" in UserCredential.schema.methods).toBeDefined();
  });

  it("should have createOtp static method defined", () => {
    expect("createOtp" in UserCredential.schema.methods).toBeDefined();
  });
});

describe("User Credential Model", () => {
  const testPassword = "12345abcde",
    testSalt = "test salty";
  it("should hash password using static method", async () => {
    const hash = await UserCredential.hashPassword(testPassword, testSalt);

    expect(typeof hash).toBe("string");
    expect(hash).not.toBe(testPassword);
    expect(hash).not.toBe(testSalt);
  });

  it("should validate password using static method", () => {
    const invalidPassword = "";

    expect(UserCredential.validatePassword(testPassword)).toBeTruthy();
    expect(() => {
      UserCredential.validatePassword(invalidPassword);
    }).toThrow();
  });

  it("should return a nodemailer transport mail object", () => {
    const testOtp = "test one time password",
      testEmail = "test@jest.com";
    const expectedMailObject = {
      subject: "Email Verification OTP",
      sender: appName,
      from: `${appName}@nodemailer.com`,
      to: testEmail,
      html: `<h2>One Time Password</h2><p><code>${testOtp}</code><br/><br/>Send a mutation request - signupValidatedUser - with this OTP to complete signup.</p>`,
    };

    expect(UserCredential.getOtpVerificationMail(testOtp, testEmail)).toEqual(
      expectedMailObject
    );
  });
});
