import { env } from "@dig-it/env";
import { TypesConfiguration } from "./types";

const { PROD } = env;

const graphpath = "/";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph types
 * @notes [ ]
 *
 */
export const configuration: TypesConfiguration = {
  SERVER: {
    GRAPH_PATH: graphpath,
    UNSECURED_ROUTES: ["/", "/breathe", PROD ? "" : graphpath].filter(
      (r) => !!r
    ),
  },
};
