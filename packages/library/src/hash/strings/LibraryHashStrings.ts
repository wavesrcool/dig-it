import * as jshashes from "jshashes";

const hasher = new jshashes.SHA512();

/**
 * * Dig It Documentation
 *
 * @created 01 22 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryHashStrings = (l: string): string => {
  const hash = hasher.hex(l);
  return String(hash);
};
