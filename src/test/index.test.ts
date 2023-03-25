import { describe, it, expect } from "@jest/globals"
import resolvers from "../gql/resolvers"

describe("Sample GraphQL hello query", () => {
  it("should return hi", () => {
    expect(resolvers.Query.hello()).toBe("hi")
  })
})