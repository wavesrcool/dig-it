import { ExpressContext } from "apollo-server-express";
import Redis from "ioredis";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph types
 * @notes [ ]
 *
 */
export type TypesGraphHttpApollo = ExpressContext & {
  redis: Redis;
};
