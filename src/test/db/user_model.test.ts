import { describe, it, expect } from "@jest/globals";
import User from "../../db/models/user_model";

describe("User Schema", () => {
  it("should have expected object data fields defined", () => {
    expect("email" in User.schema.obj).toBeTruthy();
    expect("username" in User.schema.obj).toBeTruthy();
  });
});
