/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection dev synchronous function
 * @notes [ ]
 *
 */
export const getArgvOpt = (i?: number): string | undefined => {
  const find = process.argv[i || 2];
  if (!find || typeof find !== "string") {
    return undefined;
  }

  return find;
};
