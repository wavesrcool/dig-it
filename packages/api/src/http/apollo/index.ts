import connection from "@dig-it/models";
import { ApolloServer } from "apollo-server-express";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { ClassesApi } from "../../classes";
import { DigItGraph0000 } from "../../resolvers/0000/dig-it-graph-0000-resolver";
import { DigItGraph0001 } from "../../resolvers/0001/dig-it-graph-0001-resolver";
import { DigItGraph0002 } from "../../resolvers/0002/dig-it-graph-0002-resolver";
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
      resolvers: [DigItGraph0000, DigItGraph0001, DigItGraph0002],
      scalarsMap: [],
      validate: false,
    }),
    cache: "bounded",
    context: async (ctx): Promise<TypesApiHttpApollo> => {
      const context: TypesApiHttpApollo = {
        ...ctx,
        redis,
        connection: conn,
        classes,
      };
      return context;
    },
  });

  return apollo;
};
