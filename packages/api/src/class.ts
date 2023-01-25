import { env } from "@dig-it/env";
import connection from "@dig-it/models";
import { ApiHttp } from "./http";

const { PROD } = env;

const logsname = `[dig-it api]:`;

export class ClassApi {
  private conn: typeof connection;

  constructor() {
    this.conn = connection;
  }

  public get connection(): typeof this.conn {
    return this.conn;
  }

  public async start() {
    ApiHttp(this.connection)
      .then(() => {
        console.log(`${logsname} Started.`);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((e: any) => {
        let e0: string | undefined;
        let e1: string | undefined;

        const { code, syscall } = e;

        if (code && syscall) {
          e0 = code;
          e1 = syscall;
        } else if (e instanceof Error) {
          e0 = e.name;
          e1 = e.message;
        } else {
          e0 = `dig-it`;
          e1 = `api-catch`;
        }

        if (!PROD) {
          console.log(`${logsname} Error.`);
          console.log(e0);
          console.log(e1);

          console.log(e);
        }
      });
  }
}
