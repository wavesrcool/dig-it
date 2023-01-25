import { env } from "@dig-it/env";
import { TypesApiConfiguration } from "./types";

const { PROD } = env;

const graphpath = "/";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api types
 * @notes [ ]
 *
 */
export const configapi: TypesApiConfiguration = {
  SERVER: {
    GRAPH_PATH: graphpath,
    UNSECURED_ROUTES: ["/", "/breathe", PROD ? "" : graphpath].filter(
      (r) => !!r
    ),
  },
};
