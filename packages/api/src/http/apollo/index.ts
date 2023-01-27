import connection from "@dig-it/models";
import { ApolloServer } from "apollo-server-express";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { ClassesApi } from "../../classes";
import { DigItGraph0000 } from "../../resolvers/0000/dig-it-graph-0000-resolver";
import { DigItGraph0003 } from "../../resolvers/0003/dig-it-graph-0003-resolver";
import { DigItGraphDigsConfirmOpen } from "../../resolvers/digs/confirm-open/dig-it-graph-digs-confirm-open-resolver";
import { DigItGraphDigsCreateOpen } from "../../resolvers/digs/create-open/dig-it-graph-digs-create-open-resolver";
import { DigItGraphLogInConfirm } from "../../resolvers/log-in/confirm/dig-it-graph-log-in-confirm-resolver";
import { DigItGraphLogInOpen } from "../../resolvers/log-in/open/dig-it-graph-log-in-open-resolver";
import { DigItGraphSessionRead } from "../../resolvers/session/read/dig-it-graph-session-read-resolver";

import { TypesApiHttpApollo } from "./types";

const classes = new ClassesApi();

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api synchronous function
 * @notes [ ]
 *
 */
export const ApiHttpApollo = async (
  redis: Redis,
  conn: typeof connection
): Promise<ApolloServer> => {
  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        DigItGraph0000,
        DigItGraphDigsCreateOpen,
        DigItGraphDigsConfirmOpen,
        DigItGraph0003,
        DigItGraphLogInOpen,
        DigItGraphLogInConfirm,
        DigItGraphSessionRead,
      ],
      scalarsMap: [],
      validate: false,
    }),
    cache: "bounded",
    context: async ({ req, res }): Promise<TypesApiHttpApollo> => {
      const context: TypesApiHttpApollo = {
        req,
        res,
        redis,
        connection: conn,
        classes,
      };
      return context;
    },
  });

  return apollo;
};
