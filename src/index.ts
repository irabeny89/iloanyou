import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import createGqlServer, { createGqlContext } from './gql';

export interface GqlContextT {
  token?: string
}

// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
const httpServer = http.createServer(app);

const server = createGqlServer(httpServer)
// Ensure we wait for our server to start
server.start().then(() => {
  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: createGqlContext,
    }),
  );

  // Modified server startup
  new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))
    .then(() => console.log(`🚀 Server ready at http://localhost:4000/`))
    .catch(() => console.error('💥 Server failed to start!'))
});

