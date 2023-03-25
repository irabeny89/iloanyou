import { ApolloServer, BaseContext, ContextFunction } from "@apollo/server";
import { readFileSync } from "fs";
import resolvers from "./resolvers";
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";

export interface GqlContextT {
  token?: string
}

/**
 * Function to create GraphQL context for the Apollo server expressMiddleware.
 * 
 * @param param0 - Expressjs req and res objects
 * @returns graphql context object
 */
export const createGqlContext: ContextFunction<[ExpressContextFunctionArgument], BaseContext> | undefined = async ({ req }) => ({ token: req.headers.token })

/**
 * ApolloServer initialization using drain plugin
 * for our httpServer for graceful shutdowns.
 * 
 * @param httpServer - nodejs http server
 * @returns Apollo server instance
 */
export default function createGqlServer(httpServer: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) {
  return new ApolloServer<GqlContextT>({
    typeDefs: readFileSync('./src/gql/schema.graphql', 'utf-8'),
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
}