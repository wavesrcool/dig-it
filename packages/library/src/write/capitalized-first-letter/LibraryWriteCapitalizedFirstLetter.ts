/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryWriteCapitalizedFirstLetter = (l: string): string => {
  const ws = `${l.charAt(0).toUpperCase()}${l.slice(1)}`;
  return ws;
};
