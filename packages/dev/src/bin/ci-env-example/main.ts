#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { getArgv } from "../../util/getArgv";

const argenv = getArgv().toLowerCase();

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection dev synchronous function
 * @notes [ ]
 *
 */
const main = () => {
  let msg = `[ci-env-example]`;

  if (!["graph", "models"].includes(argenv)) {
    msg += ` - specified unknown environment`;
    throw new Error(msg);
  }

  let ws = ``;
  ws += `# dig-it environment\n`;

  if (argenv === "graph") {
    ws += `
GRAPH_PORT=
GRAPH_CORS_ORIGIN=
GRAPH_REDIS_PORT=
GRAPH_COOKIE_NAME=
GRAPH_COOKIE_IV=
GRAPH_TOK_IV=
GRAPH_HASH_IV=
GRAPH_ENC_IV=
`;
  }

  if (argenv === "models") {
    ws += `
MODELS_DB=
`;
  }

  const dirb = path.join(process.cwd());
  const dirw = path.join(dirb, `.env.${argenv}`);
  fs.writeFileSync(dirw, ws);
};

main();
