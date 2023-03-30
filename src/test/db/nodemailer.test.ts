import { describe, it, expect } from "@jest/globals";
import { createTransport } from "nodemailer";
import { nodemailerAppLocalServerConfig } from "../../config";

describe("NodemailerApp", () => {
  it("should verify transport connection to local SMTP server", async () => {
    expect(
      await createTransport(nodemailerAppLocalServerConfig).verify()
    ).toBeTruthy();
  });
});
