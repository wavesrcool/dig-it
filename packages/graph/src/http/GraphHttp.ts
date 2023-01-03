import { env } from "@dig-it/env";
import connection from "@dig-it/models";
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

const logname = `[dig-it graph]:`;

/**
 * * Dig It Documentation
 *
 * @created 09 16 2022
 * @collection graph asynchronous function
 * @notes [ ]
 *
 */
export const GraphHttp = async (
  conn: typeof connection
): Promise<ApolloServer> => {
  await conn
    .initialize()
    .then(() => console.log(`${logname} Database connection established.`));

  const { 0: app, 1: redis } = GraphHttpApp();

  if (PROD) {
    await redis.flushall();
  }

  const apollo = await GraphHttpApollo(redis);

  if (!apollo) {
    throw new Error(`${logname} Error. No graph instance.`);
  }

  await apollo.start().then(() => {
    console.log(`${logname} Apollo server running.`);
  });

  apollo.applyMiddleware({
    app,
    cors: false,
    path: GRAPH_PATH,
  });

  const PORT = process.env.PORT || GRAPH_PORT;

  app.listen(PORT, (): void => {
    console.log(`${logname} (env) ${process.env.NODE_ENV || "no env"}`);
    console.log(`${logname} (port) ${PORT}`);
  });

  return apollo;
};
