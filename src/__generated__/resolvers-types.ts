import { GraphQLResolveInfo } from 'graphql';
import { GqlContextT } from '../../src/gql/index';
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

export type Mutation = {
  __typename?: 'Mutation';
  signupValidatedUser: ResponseInterface;
};


export type MutationSignupValidatedUserArgs = {
  otp: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Run test query */
  hello: Scalars['String'];
  /** Old user login */
  signin: Scalars['String'];
  /** Register new user */
  signup: ResponseInterface;
};


export type QuerySigninArgs = {
  signinInput: SigninInput;
};


export type QuerySignupArgs = {
  signupInput: SignupInput;
};

export type ResponseInterface = {
  code: Scalars['Int'];
  message: Scalars['String'];
  status: StatusEnum;
};

export type SigninInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignupData = {
  __typename?: 'SignupData';
  testEmailMessageLink: Scalars['String'];
  testEmailPassword: Scalars['String'];
  testEmailUsername: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignupResponse = ResponseInterface & {
  __typename?: 'SignupResponse';
  data: SignupData;
};

export enum StatusEnum {
  ClientError = 'CLIENT_ERROR',
  Ok = 'OK',
  ServerError = 'SERVER_ERROR'
}

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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ResponseInterface: ResolversTypes['SignupResponse'];
  SigninInput: SigninInput;
  SignupData: ResolverTypeWrapper<SignupData>;
  SignupInput: SignupInput;
  SignupResponse: ResolverTypeWrapper<SignupResponse>;
  StatusEnum: StatusEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  ResponseInterface: ResolversParentTypes['SignupResponse'];
  SigninInput: SigninInput;
  SignupData: SignupData;
  SignupInput: SignupInput;
  SignupResponse: SignupResponse;
  String: Scalars['String'];
}>;

export type MutationResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  signupValidatedUser?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<MutationSignupValidatedUserArgs, 'otp'>>;
}>;

export type QueryResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signin?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QuerySigninArgs, 'signinInput'>>;
  signup?: Resolver<ResolversTypes['ResponseInterface'], ParentType, ContextType, RequireFields<QuerySignupArgs, 'signupInput'>>;
}>;

export type ResponseInterfaceResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['ResponseInterface'] = ResolversParentTypes['ResponseInterface']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SignupResponse', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StatusEnum'], ParentType, ContextType>;
}>;

export type SignupDataResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['SignupData'] = ResolversParentTypes['SignupData']> = ResolversObject<{
  testEmailMessageLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  testEmailPassword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  testEmailUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SignupResponseResolvers<ContextType = GqlContextT, ParentType extends ResolversParentTypes['SignupResponse'] = ResolversParentTypes['SignupResponse']> = ResolversObject<{
  data?: Resolver<ResolversTypes['SignupData'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GqlContextT> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseInterface?: ResponseInterfaceResolvers<ContextType>;
  SignupData?: SignupDataResolvers<ContextType>;
  SignupResponse?: SignupResponseResolvers<ContextType>;
}>;

