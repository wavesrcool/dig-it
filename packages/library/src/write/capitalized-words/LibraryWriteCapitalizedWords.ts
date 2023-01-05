import { LibraryWriteCapitalizedFirstLetter } from "../capitalized-first-letter/LibraryWriteCapitalizedFirstLetter";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryWriteCapitalizedWords = (l: string): string => {
  const ws = l
    .split(" ")
    .map((i) => LibraryWriteCapitalizedFirstLetter(i))
    .join(" ");

  return ws;
};
