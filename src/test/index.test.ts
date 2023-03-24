import {describe, it, expect} from "@jest/globals"
import resolvers from "../gql/resolvers"

describe("resolvers", () => {
  it("should return hello", () => {
    expect(resolvers.Query.hello()).toBe("hi")
  })
})