import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import createGqlServer, { createGqlContext } from "./gql";
import ConnectDB from "./db";
import expressRestApi from "./rest";

// start db connection
ConnectDB()
  .then(async () => {
    // Our httpServer handles incoming requests to our Express app.
    // deepcode ignore HttpToHttps: this code base will be on https when hosted on a cloud service.
    const httpServer = http.createServer(expressRestApi);
    // create apollo server instance
    const server = createGqlServer(httpServer);
    // Ensure we wait for our server to start
    await server.start();
    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    expressRestApi.use(
      "/",
      cors<cors.CorsRequest>(),
      bodyParser.json(),
      // expressMiddleware accepts the same arguments:
      // an Apollo Server instance and optional configuration options
      expressMiddleware(server, {
        context: createGqlContext,
      })
    );

    // Modified server startup
    new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve))
      .then(() => console.info(`🚀 Server ready at http://localhost:4000/`))
      .catch(() => console.error("💥 Server failed to start!"));
  })
  .catch(console.error);
