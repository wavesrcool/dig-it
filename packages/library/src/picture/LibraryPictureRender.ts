import * as ava from "@fractalsoftware/random-avatar-generator";

/**
 * * Dig It Documentation
 *
 * @created 01 23 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryPictureRender = (base: string): string => {
  const pic = ava.getAvatarFromData(base, `circle`);
  return pic;
};
