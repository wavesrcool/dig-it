import { env } from "@dig-it/env";
import { ApolloServer } from "apollo-server-express";
import { configgraph } from "../config";
import { envgraph } from "../_env";
import { GraphHttpApollo } from "./apollo/GraphHttpApollo";
import { GraphHttpApp } from "./app/GraphHttpApp";

const { PROD } = env;

const { GRAPH_PORT } = envgraph;

const {
  SERVER: { GRAPH_PATH },
} = configgraph;

/**
 * * Dig It Documentation
 *
 * @created 09 16 2022
 * @collection graph asynchronous function
 * @notes [ ]
 *
 */
export const GraphHttp = async (connection: any): Promise<ApolloServer> => {
  await connection
    .initialize()
    .then(() => console.log(`[graph]: Database connection established.`));

  const { 0: app, 1: redis } = GraphHttpApp();

  if (PROD) {
    await redis.flushall();
  }

  const apollo = await GraphHttpApollo(redis);

  if (!apollo) {
    throw new Error(`[graph]: Error. No graph instance.`);
  }

  await apollo.start().then(() => {
    console.log("[graph]: Apollo server running.");
  });

  apollo.applyMiddleware({
    app,
    cors: false,
    path: GRAPH_PATH,
  });

  const PORT = process.env.PORT || GRAPH_PORT;

  app.listen(PORT, (): void => {
    console.log(`[graph]: (env) ${process.env.NODE_ENV || "no env"}`);
    console.log(`[graph]: (port) ${PORT}`);
  });

  return apollo;
};
