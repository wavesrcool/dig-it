import connection from "@dig-it/models";
import { ExpressContext } from "apollo-server-express";
import Redis from "ioredis";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api types
 * @notes [ ]
 *
 */
export type TypesApiHttpApollo = ExpressContext & {
  redis: Redis;
  connection: typeof connection;
};
