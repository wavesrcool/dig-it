/* eslint-disable no-promise-executor-return */
import { sign, SignOptions, verify, VerifyOptions } from "jsonwebtoken";
import { envapi } from "../../_env";

export type TypesClassesApiJwtSignMessage = "sign-error";
export type TypesClassesApiJwtVerifyMessage =
  | "verify-error"
  | "decoded-error"
  | "key-error";

const { GRAPH_JWT_IV } = envapi;

const signOptions: SignOptions = {
  algorithm: "HS512",
  expiresIn: "6h",
};

const verifyOptions: VerifyOptions = {
  algorithms: ["HS512"],
};
export class ClassesApiJwt {
  public async sign(
    payload: string
  ): Promise<{ jwt: string } | TypesClassesApiJwtSignMessage> {
    try {
      const key = `${payload}`;

      const data = {
        aud: "www.dig-it.earth",
        iss: "api.dig-it.earth",
        sub: "token",
        key,
      };

      return new Promise<{ jwt: string } | TypesClassesApiJwtSignMessage>(
        (resolve) => {
          return sign(data, GRAPH_JWT_IV, signOptions, (signError, encoded) => {
            if (!signError) {
              if (typeof encoded === "string") {
                resolve({ jwt: encoded });
                return;
              }
            } else {
              resolve(`sign-error`);
              return;
            }
          });
        }
      );
    } catch (e) {
      return `sign-error`;
    }
  }

  public async verify(
    token: string | string[] | undefined
  ): Promise<{ key: string } | TypesClassesApiJwtVerifyMessage> {
    if (typeof token !== "string") {
      return `verify-error`;
    }
    try {
      return new Promise<{ key: string } | TypesClassesApiJwtVerifyMessage>(
        (resolve) => {
          return verify(
            token,
            GRAPH_JWT_IV,
            verifyOptions,
            (verifyError, decoded) => {
              if (verifyError === null) {
                if (decoded) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const { key } = decoded as any;

                  if (!key || typeof key !== "string") {
                    resolve(`key-error`);
                    return;
                  }

                  resolve({ key });
                } else {
                  resolve(`decoded-error`);
                  return;
                }
              } else {
                resolve(`verify-error`);
                return;
              }
            }
          );
        }
      );
    } catch (e) {
      return `verify-error`;
    }
  }
}
