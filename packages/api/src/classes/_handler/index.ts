/* eslint-disable @typescript-eslint/no-explicit-any */
import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";

export class ClassesApiGraphHandler {
  public error<T1>(message: T1): GraphObjectsResolve<T1> {
    const timestamp = Date.now();
    return {
      pass: false,
      message,
      timestamp,
      hash: LibraryHashStrings(`${timestamp}#${message}`),
    };
  }

  public catch(e: any): string {
    let msg = `catch`;
    if (typeof e.code === "string") {
      msg = e.code;
    }

    return msg;
  }
}
