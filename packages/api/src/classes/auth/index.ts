/* eslint-disable no-promise-executor-return */
import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { gen } from "n-digit-token";

export class ClassesApiAuth {
  public passcode(): string {
    const pc = gen(6);
    return pc;
  }

  public hash(value: string): string {
    const h = LibraryHashStrings(value);
    return h;
  }
}
