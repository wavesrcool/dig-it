import * as dotenv from "dotenv-safe";
import path from "path";
import { EnvGraphType } from "./types";

dotenv.config({
  allowEmptyValues: false,
  example: path.join(__dirname, `..`, `..`, `.env.graph`),
});

let msg: string | undefined;

const { GRAPH_PORT } = process.env;
if (!GRAPH_PORT) {
  msg = `process.env.GRAPH_PORT`;
  throw new Error(msg);
}

const { GRAPH_CORS_ORIGIN } = process.env;
if (!GRAPH_CORS_ORIGIN) {
  msg = `process.env.GRAPH_CORS_ORIGIN`;
  throw new Error(msg);
}

const { GRAPH_TOK_IV } = process.env;
if (!GRAPH_TOK_IV) {
  msg = `process.env.GRAPH_TOK_IV`;
  throw new Error(msg);
}

const { GRAPH_HASH_IV } = process.env;
if (!GRAPH_HASH_IV) {
  msg = `process.env.GRAPH_HASH_IV`;
  throw new Error(msg);
}

const { GRAPH_ENC_IV } = process.env;
if (!GRAPH_ENC_IV) {
  msg = `process.env.GRAPH_ENC_IV`;
  throw new Error(msg);
}

const { GRAPH_COOKIE_IV } = process.env;
if (!GRAPH_COOKIE_IV) {
  msg = `process.env.GRAPH_COOKIE_IV`;
  throw new Error(msg);
}

const { GRAPH_COOKIE_NAME } = process.env;
if (!GRAPH_COOKIE_NAME) {
  msg = `process.env.GRAPH_COOKIE_NAME`;
  throw new Error(msg);
}

const { GRAPH_REDIS_PORT } = process.env;
if (!GRAPH_REDIS_PORT) {
  msg = `process.env.GRAPH_REDIS_PORT`;
  throw new Error(msg);
}

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph ref
 * @notes [ ]
 *
 */
export const envgraph: EnvGraphType = {
  GRAPH_PORT,
  GRAPH_CORS_ORIGIN,
  GRAPH_REDIS_PORT,
  GRAPH_TOK_IV,
  GRAPH_HASH_IV,
  GRAPH_ENC_IV,
  GRAPH_COOKIE_NAME,
  GRAPH_COOKIE_IV,
};
