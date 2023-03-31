import { GraphQLResolveInfo } from 'graphql';
import { GqlContextT } from '../../src/gql/gql_common_type.d';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AcceptLoanTermInput = {
  /** The loan to accept */
  loanId: Scalars['ID'];
};

export type AuthorizeLoanInput = {
  /** The loan to authorize id */
  loanId: Scalars['String'];
  /** User password */
  password: Scalars['String'];
};

export type CreateLoanTermInput = {
  /** Amount to loan out */
  amount: Scalars['Float'];
  /** Loan deadline */
  deadline: Scalars['String'];
  /** Who benefits the loan */
  loanee: Scalars['ID'];
};

export type CreateLoanTermResponse = ResponseInterface & {
  __typename?: 'CreateLoanTermResponse';
  /** Request actual returned data */
  createLoanTermReturnData?: Maybe<CreateLoanTermReturnData>;
  /** Response meta data like request header data */
  responseMetaData: ResponseMetaData;
};

export type CreateLoanTermReturnData = {
  __typename?: 'CreateLoanTermReturnData';
  /** Loan document id */
  id: Scalars['ID'];
  /** Unique loan term pass-key */
  passkey: Scalars['String'];
};

export type DeclineLoanTermInput = {
  /** The loan to decline */
  loanId: Scalars['ID'];
};

export type GetLoanTermInput = {
  /** Document id */
  loanId: Scalars['ID'];
};

export type GetLoanTermResponse = ResponseInterface & {
  __typename?: 'GetLoanTermResponse';
  /** Request actual returned data */
  getLoanTermReturnData?: Maybe<GetLoanTermReturnData>;
  /** Response meta data like request header data */
  responseMetaData: ResponseMetaData;
};

export type GetLoanTermReturnData = {
  __typename?: 'GetLoanTermReturnData';
  /** Amount loaned */
  amount: Scalars['Float'];
  /** The date the loan was created */
  createdAt: Scalars['String'];
  /** Loan repayment deadline */
  deadline: Scalars['String'];
  /** Document id */
  id: Scalars['ID'];
  /** True if loan is accepted by the loanee and false otherwise */
  isAccepted: Scalars['Boolean'];
  /** True if loan is authorized by the loaner and false otherwise */
  isAuthorized: Scalars['Boolean'];
  /** The the user getting the loan */
  loanee: User;
  /** The user giving loan */
  loaner: User;
  /** Loan term pass key */
  passkey: Scalars['String'];
  /** The date the loan was updated */
  updatedAt: Scalars['String'];
};

export type GetSignupOtpResponse = ResponseInterface & {
  __typename?: 'GetSignupOtpResponse';
  /** Request actual returned data */
  getSignupOtpReturnData?: Maybe<GetSignupOtpReturnData>;
  /** Response meta data like request header data */
  responseMetaData: ResponseMetaData;
};

export type GetSignupOtpReturnData = {
  __typename?: 'GetSignupOtpReturnData';
  /** Test email message link to get the OTP for signup completion */
  testEmailMessageLink: Scalars['String'];
  /** Test email account password */
  testEmailPassword: Scalars['String'];
  /** Test email account username */
  testEmailUsername: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept the loan term */
  acceptLoanTerm: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Authorize created loan term */
  authorizeLoan: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Create a loan term */
  createLoanTerm: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Decline the loan */
  declineLoanTerm: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Repay loan */
  repayLoan: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Top up wallet balance */
  topupBalance: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
};


export type MutationAcceptLoanTermArgs = {
  acceptLoanTermInput: AcceptLoanTermInput;
};


export type MutationAuthorizeLoanArgs = {
  authorizeLoanInput: AuthorizeLoanInput;
};


export type MutationCreateLoanTermArgs = {
  createLoanTermInput: CreateLoanTermInput;
};


export type MutationDeclineLoanTermArgs = {
  declineLoanTermInput: DeclineLoanTermInput;
};


export type MutationRepayLoanArgs = {
  repayLoanInput: RepayLoanInput;
};


export type MutationTopupBalanceArgs = {
  topupBalanceInput: TopupBalanceInput;
};

export type Query = {
  __typename?: 'Query';
  /** Get a loan data */
  getLoanTerm: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Get otp to be sent to an email */
  getSignupOtp: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Run test query */
  hello: Scalars['String'];
  /** Old user login */
  signin: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
  /** Register new user */
  signup: CreateLoanTermResponse | GetLoanTermResponse | GetSignupOtpResponse | SigninResponse | SignupResponse | TopupBalanceResponse;
};


export type QueryGetLoanTermArgs = {
  getLoanTermInput: GetLoanTermInput;
};


export type QueryGetSignupOtpArgs = {
  email: Scalars['String'];
};


export type QuerySigninArgs = {
  signinInput: SigninInput;
};


export type QuerySignupArgs = {
  signupInput: SignupInput;
};

export type RepayLoanInput = {
  /** Amount owed to pay back */
  amount: Scalars['Float'];
  /** Id of loan to settle */
  loanId: Scalars['String'];
};

export type ResponseInterface = {
  responseMetaData: ResponseMetaData;
};

export type ResponseMetaData = {
  __typename?: 'ResponseMetaData';
  /** HTTP status code */
  code: Scalars['Int'];
  /** Message about the request */
  message: Scalars['String'];
  /** Custom status */
  status: StatusEnum;
};

export type SigninInput = {
  /** User email */
  email: Scalars['String'];
  /** User password */
  password: Scalars['String'];
};

export type SigninResponse = ResponseInterface & {
  __typename?: 'SigninResponse';
  /** Response meta data like request header data */
  responseMetaData: ResponseMetaData;
  /** Request actual returned data */
  signinReturnData?: Maybe<SigninReturnData>;
};

export type SigninReturnData = {
  __typename?: 'SigninReturnData';
  /** Access token encrypted with user data */
  accessToken: Scalars['String'];
};

export type SignupInput = {
  /** User email */
  email: Scalars['String'];
  /** One time password retrieved from email */
  otp: Scalars['String'];
  /** User password */
  password: Scalars['String'];
  /** User name */
  username: Scalars['String'];
};

export type SignupResponse = ResponseInterface & {
  __typename?: 'SignupResponse';
  /** Response meta data like request header data */
  responseMetaData: ResponseMetaData;
  /** Request actual returned data */
  signupReturnData?: Maybe<SignupReturnData>;
};

export type SignupReturnData = {
  __typename?: 'SignupReturnData';
  /** Access token encrypted with user data */
  accessToken: Scalars['String'];
};

export enum StatusEnum {
  /** Error with the request */
  ClientError = 'CLIENT_ERROR',
  /** Successful request */
  Ok = 'OK',
  /** Error with the server */
  ServerError = 'SERVER_ERROR'
}

export type TopupBalanceInput = {
  /** Amount to add */
  amount: Scalars['Float'];
};

export type TopupBalanceResponse = ResponseInterface & {
  __typename?: 'TopupBalanceResponse';
  /** Response meta data like request header data */
  responseMetaData: ResponseMetaData;
  /** Request actual returned data */
  topupBalanceReturnData?: Maybe<TopupBalanceReturnData>;
};

export type TopupBalanceReturnData = {
  __typename?: 'TopupBalanceReturnData';
  /** New balance */
  balance: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  /** Date registered */
  createdAt: Scalars['String'];
  /** User email */
  email: Scalars['String'];
  /** Document id */
  id: Scalars['ID'];
  /** Date updated data */
  updatedAt: Scalars['String'];
  /** User name */
  username: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AcceptLoanTermInput: AcceptLoanTermInput;
  AuthorizeLoanInput: AuthorizeLoanInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateLoanTermInput: CreateLoanTermInput;
  CreateLoanTermResponse: ResolverTypeWrapper<CreateLoanTermResponse>;
  CreateLoanTermReturnData: ResolverTypeWrapper<CreateLoanTermReturnData>;
  DeclineLoanTermInput: DeclineLoanTermInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetLoanTermInput: GetLoanTermInput;
  GetLoanTermResponse: ResolverTypeWrapper<GetLoanTermResponse>;
  GetLoanTermReturnData: ResolverTypeWrapper<GetLoanTermReturnData>;
  GetSignupOtpResponse: ResolverTypeWrapper<GetSignupOtpResponse>;
  GetSignupOtpReturnData: ResolverTypeWrapper<GetSignupOtpReturnData>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RepayLoanInput: RepayLoanInput;
  ResponseInterface: ResolversTypes['CreateLoanTermResponse'] | ResolversTypes['GetLoanTermResponse'] | ResolversTypes['GetSignupOtpResponse'] | ResolversTypes['SigninResponse'] | ResolversTypes['SignupResponse'] | ResolversTypes['TopupBalanceResponse'];
  ResponseMetaData: ResolverTypeWrapper<ResponseMetaData>;
  SigninInput: SigninInput;
  SigninResponse: ResolverTypeWrapper<SigninResponse>;
  SigninReturnData: ResolverTypeWrapper<SigninReturnData>;
  SignupInput: SignupInput;
  SignupResponse: ResolverTypeWrapper<SignupResponse>;
  SignupReturnData: ResolverTypeWrapper<SignupReturnData>;
  StatusEnum: StatusEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  TopupBalanceInput: TopupBalanceInput;
  TopupBalanceResponse: ResolverTypeWrapper<TopupBalanceResponse>;
  TopupBalanceReturnData: ResolverTypeWrapper<TopupBalanceReturnData>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AcceptLoanTermInput: AcceptLoanTermInput;
  AuthorizeLoanInput: AuthorizeLoanInput;
  Boolean: Scalars['Boolean'];
  CreateLoanTermInput: CreateLoanTermInput;
  CreateLoanTermResponse: CreateLoanTermResponse;
  CreateLoanTermReturnData: CreateLoanTermReturnData;
  DeclineLoanTermInput: DeclineLoanTermInput;
  Float: Scalars['Float'];
  GetLoanTermInput: GetLoanTermInput;
  GetLoanTermResponse: GetLoanTermResponse;
  GetLoanTermReturnData: GetLoanTermReturnData;
  GetSignupOtpResponse: GetSignupOtpResponse;
  GetSignupOtpReturnData: GetSignupOtpReturnData;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  RepayLoanInput: RepayLoanInput;
  ResponseInterface: ResolversParentTypes['CreateLoanTermResponse'] | ResolversParentTypes['GetLoanTermResponse'] | ResolversParentTypes['GetSignupOtpResponse'] | ResolversParentTypes['SigninResponse'] | ResolversParentTypes['SignupResponse'] | ResolversParentTypes['TopupBalanceResponse'];
  ResponseMetaData: ResponseMetaData;
  SigninInput: SigninInput;
  SigninResponse: SigninResponse;
  SigninReturnData: SigninReturnData;
  SignupInput: SignupInput;
  SignupResponse: SignupResponse;
  SignupReturnData: SignupReturnData;
  String: Scalars['String'];
  TopupBalanceInput: TopupBalanceInput;
  TopupBalanceResponse: TopupBalanceResponse;
  TopupBalanceReturnData: TopupBalanceReturnData;
  User: User;
}>;

export type CreateLoanTermResponseResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['CreateLoanTermResponse'] = ResolversParentTypes['CreateLoanTermResponse']> = ResolversObject<{
  createLoanTermReturnData?: Resolver<Maybe<ResolversTypes['CreateLoanTermReturnData']>, ParentType, ContextType>;
  responseMetaData?: Resolver<ResolversTypes['ResponseMetaData'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateLoanTermReturnDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['CreateLoanTermReturnData'] = ResolversParentTypes['CreateLoanTermReturnData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  passkey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetLoanTermResponseResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['GetLoanTermResponse'] = ResolversParentTypes['GetLoanTermResponse']> = ResolversObject<{
  getLoanTermReturnData?: Resolver<Maybe<ResolversTypes['GetLoanTermReturnData']>, ParentType, ContextType>;
  responseMetaData?: Resolver<ResolversTypes['ResponseMetaData'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetLoanTermReturnDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['GetLoanTermReturnData'] = ResolversParentTypes['GetLoanTermReturnData']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAccepted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAuthorized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  loanee?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  loaner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  passkey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetSignupOtpResponseResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['GetSignupOtpResponse'] = ResolversParentTypes['GetSignupOtpResponse']> = ResolversObject<{
  getSignupOtpReturnData?: Resolver<Maybe<ResolversTypes['GetSignupOtpReturnData']>, ParentType, ContextType>;
  responseMetaData?: Resolver<ResolversTypes['ResponseMetaData'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetSignupOtpReturnDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['GetSignupOtpReturnData'] = ResolversParentTypes['GetSignupOtpReturnData']> = ResolversObject<{
  testEmailMessageLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  testEmailPassword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  testEmailUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  acceptLoanTerm?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<MutationAcceptLoanTermArgs, 'acceptLoanTermInput'>>;
  authorizeLoan?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<MutationAuthorizeLoanArgs, 'authorizeLoanInput'>>;
  createLoanTerm?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<MutationCreateLoanTermArgs, 'createLoanTermInput'>>;
  declineLoanTerm?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<MutationDeclineLoanTermArgs, 'declineLoanTermInput'>>;
  repayLoan?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<MutationRepayLoanArgs, 'repayLoanInput'>>;
  topupBalance?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<MutationTopupBalanceArgs, 'topupBalanceInput'>>;
}>;

export type QueryResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getLoanTerm?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<QueryGetLoanTermArgs, 'getLoanTermInput'>>;
  getSignupOtp?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<QueryGetSignupOtpArgs, 'email'>>;
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signin?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<QuerySigninArgs, 'signinInput'>>;
  signup?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<QuerySignupArgs, 'signupInput'>>;
}>;

export type ResponseInterfaceResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['ResponseInterface'] = ResolversParentTypes['ResponseInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CreateLoanTermResponse' | 'GetLoanTermResponse' | 'GetSignupOtpResponse' | 'SigninResponse' | 'SignupResponse' | 'TopupBalanceResponse', ParentType, ContextType>;
  responseMetaData?: Resolver<ResolversTypes['ResponseMetaData'], ParentType, ContextType>;
}>;

export type ResponseMetaDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['ResponseMetaData'] = ResolversParentTypes['ResponseMetaData']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StatusEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SigninResponseResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['SigninResponse'] = ResolversParentTypes['SigninResponse']> = ResolversObject<{
  responseMetaData?: Resolver<ResolversTypes['ResponseMetaData'], ParentType, ContextType>;
  signinReturnData?: Resolver<Maybe<ResolversTypes['SigninReturnData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SigninReturnDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['SigninReturnData'] = ResolversParentTypes['SigninReturnData']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SignupResponseResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['SignupResponse'] = ResolversParentTypes['SignupResponse']> = ResolversObject<{
  responseMetaData?: Resolver<ResolversTypes['ResponseMetaData'], ParentType, ContextType>;
  signupReturnData?: Resolver<Maybe<ResolversTypes['SignupReturnData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SignupReturnDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['SignupReturnData'] = ResolversParentTypes['SignupReturnData']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopupBalanceResponseResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['TopupBalanceResponse'] = ResolversParentTypes['TopupBalanceResponse']> = ResolversObject<{
  responseMetaData?: Resolver<ResolversTypes['ResponseMetaData'], ParentType, ContextType>;
  topupBalanceReturnData?: Resolver<Maybe<ResolversTypes['TopupBalanceReturnData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopupBalanceReturnDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['TopupBalanceReturnData'] = ResolversParentTypes['TopupBalanceReturnData']> = ResolversObject<{
  balance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GqlContextT> = ResolversObject<{
  CreateLoanTermResponse?: CreateLoanTermResponseResolvers<ContextType>;
  CreateLoanTermReturnData?: CreateLoanTermReturnDataResolvers<ContextType>;
  GetLoanTermResponse?: GetLoanTermResponseResolvers<ContextType>;
  GetLoanTermReturnData?: GetLoanTermReturnDataResolvers<ContextType>;
  GetSignupOtpResponse?: GetSignupOtpResponseResolvers<ContextType>;
  GetSignupOtpReturnData?: GetSignupOtpReturnDataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseInterface?: ResponseInterfaceResolvers<ContextType>;
  ResponseMetaData?: ResponseMetaDataResolvers<ContextType>;
  SigninResponse?: SigninResponseResolvers<ContextType>;
  SigninReturnData?: SigninReturnDataResolvers<ContextType>;
  SignupResponse?: SignupResponseResolvers<ContextType>;
  SignupReturnData?: SignupReturnDataResolvers<ContextType>;
  TopupBalanceResponse?: TopupBalanceResponseResolvers<ContextType>;
  TopupBalanceReturnData?: TopupBalanceReturnDataResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

