import { env } from "@dig-it/env";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { Dig } from "../../dig/Dig";
import { Email } from "../../email/Email";
import { Geo } from "../../geo/Geo";
import { Place } from "../../place/Place";
import { envmodels } from "../../_env";
import { Models1674620212898 } from "../migrations/1674620212898-Models";

const { PROD, ENV } = env;
const { MODELS_DB } = envmodels;

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
const options: DataSourceOptions & SeederOptions = {
  ssl: PROD ? true : ENV.toLowerCase().slice(-`_local`.length) !== `_local`,
  name: "default",
  type: "postgres",
  url: MODELS_DB,
  synchronize: false,
  logging: !PROD,
  dropSchema: false,
  entities: [Dig, Place, Geo, Email],
  subscribers: [],
  migrationsTableName: "history",
  migrationsRun: true,
  migrations: [Models1674620212898],
  seeds: [],
};

export const ModelsConnection = new DataSource(options);
