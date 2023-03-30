import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/gql/schema.graphql",
  watch: true,
  debug: true,
  verbose: true,
  generates: {
    "./src/__generated__/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useImplementingTypes: true,
        useIndexSignature: true,
        contextType: "../../src/gql/gql_common_type.d#GqlContextT",
      },
    },
  },
};

export default config;
