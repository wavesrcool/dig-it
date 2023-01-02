import { ApolloServer } from "apollo-server-express";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { DigItGraph0000 } from "../../resolvers/0000/dig-it-graph-0000-resolver";
import { TypesGraphHttpApollo } from "./TypesGraphHttpApollo";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph synchronous function
 * @notes [ ]
 *
 */
export const GraphHttpApollo = async (redis: Redis): Promise<ApolloServer> => {
  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [DigItGraph0000],
      scalarsMap: [],
      validate: false,
    }),
    cache: "bounded",
    context: async (ctx): Promise<TypesGraphHttpApollo> => {
      const context: TypesGraphHttpApollo = {
        ...ctx,
        redis,
      };
      return context;
    },
  });

  return apollo;
};
