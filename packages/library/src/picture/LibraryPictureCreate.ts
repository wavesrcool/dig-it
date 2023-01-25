import * as ava from "@fractalsoftware/random-avatar-generator";

/**
 * * Dig It Documentation
 *
 * @created 01 23 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryPictureCreate = (): string => {
  const pic = ava.generateRandomAvatarData(12);
  return pic;
};
