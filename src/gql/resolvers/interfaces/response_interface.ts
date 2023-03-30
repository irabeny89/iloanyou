import { ResponseInterfaceResolvers } from "../../../__generated__/resolvers-types";

const ResponseInterface: ResponseInterfaceResolvers = {
  __resolveType(parentObject) {
    if ("getSignupOtpReturnData" in parentObject) return "GetSignupOtpResponse";
    if ("signupReturnData" in parentObject) return "SignupResponse";
    if ("signinReturnData" in parentObject) return "SigninResponse";
    if ("createLoanTermReturnData" in parentObject) return "CreateLoanTermResponse";
    return null;
  },
};

export default ResponseInterface;
