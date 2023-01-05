/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryAttestStrings = (a: any): string | undefined => {
  if (!!a && typeof a === "string") {
    return String(a);
  }
  return undefined;
};
