/* eslint-disable no-promise-executor-return */
import cryptojs from "crypto-js";
import { envapi } from "../../_env";

const { GRAPH_ENC_IV } = envapi;

export class ClassesApiEncrypt {
  public encode(plain: string): string {
    return cryptojs.AES.encrypt(plain, GRAPH_ENC_IV).toString();
  }

  public decode(cipher: string): string {
    return cryptojs.AES.decrypt(cipher, GRAPH_ENC_IV).toString(
      cryptojs.enc.Utf8
    );
  }
}
