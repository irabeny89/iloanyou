import { describe, it, expect } from "@jest/globals";
import UserWallet from "../../db/models/user_wallet_model";

describe("UserWallet Schema", () => {
  it("should have expected object data fields defined", () => {
    expect("user" in UserWallet.schema.obj).toBeTruthy();
    expect("balance" in UserWallet.schema.obj).toBeTruthy();
  });
});
