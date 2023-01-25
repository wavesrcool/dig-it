import { env } from "@dig-it/env";
import connection from "@dig-it/models";
import { ApolloServer } from "apollo-server-express";
import { configapi } from "../config";
import { envapi } from "../_env";
import { ApiHttpApollo } from "./apollo";
import { ApiHttpApp } from "./app";

const { PROD } = env;

const { GRAPH_PORT } = envapi;

const {
  SERVER: { GRAPH_PATH },
} = configapi;

const logname = `[dig-it api]:`;

/**
 * * Dig It Documentation
 *
 * @created 09 16 2022
 * @collection api asynchronous function
 * @notes [ ]
 *
 */
export const ApiHttp = async (
  conn: typeof connection
): Promise<ApolloServer> => {
  await conn
    .initialize()
    .then(() => console.log(`${logname} Database connection established.`));

  const { 0: app, 1: redis } = ApiHttpApp();

  if (PROD) {
    await redis.flushall();
  }

  const apollo = await ApiHttpApollo(redis, conn);

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
