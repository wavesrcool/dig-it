import connection from "@dig-it/models";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import Redis from "ioredis";
import { ClassesApi } from "../../classes";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api types
 * @notes [ ]
 *
 */
export type TypesApiHttpApollo = {
  req: Request & {
    session: Session &
      Partial<
        SessionData & {
          key?: string | null;
        }
      >;
  };
  res: Response;
  redis: Redis;
  connection: typeof connection;
  classes: ClassesApi;
};
