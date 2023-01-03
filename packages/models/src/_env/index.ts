import * as dotenv from "dotenv-safe";
import path from "path";
import { EnvModelsType } from "./types";

dotenv.config({
  allowEmptyValues: false,
  example: path.join(__dirname, `..`, `..`, `.env.models`),
});

let msg: string | undefined;

const { MODELS_DB } = process.env;
if (!MODELS_DB) {
  msg = `process.env.MODELS_DB`;
  throw new Error(msg);
}

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
export const envmodels: EnvModelsType = {
  MODELS_DB,
};
