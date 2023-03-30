import { Resolvers } from "../../__generated__/resolvers-types";
import ResponseInterface from "./interfaces/response_interface";
import createLoanTerm from "./mutations/createLoanTerm";
import getSignupOtp from "./queries/getSignupOtp";
import signin from "./queries/signin";
import signup from "./queries/signup";

const resolvers: Resolvers = {
  ResponseInterface,
  Query: {
    // test query
    hello: () => "hi",
    getSignupOtp,
    signup,
    signin
  },
  Mutation: {
    createLoanTerm
  },
};

export default resolvers;
