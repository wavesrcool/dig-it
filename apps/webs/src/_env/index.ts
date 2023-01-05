/* eslint-disable prefer-destructuring */

import { TypesEnvWebs } from "_env/types";

let msg: string | undefined;

const GRAPH_URI = process.env.GRAPH_URI;
if (!GRAPH_URI) {
  msg = `process.env.GRAPH_URI`;
  throw new Error(msg);
}

const GEOCODE_KEY = process.env.GEOCODE_KEY;
if (!GEOCODE_KEY) {
  msg = `process.env.GEOCODE_KEY`;
  throw new Error(msg);
}

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection webs ref
 * @notes [ ]
 *
 */
export const envwebs: TypesEnvWebs = {
  GRAPH_URI,
  GEOCODE_KEY,
};
