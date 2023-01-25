import gh from "ngeohash";

/**
 * * Dig It Documentation
 *
 * @created 01 23 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryGeohashEncode = (
  lat: number,
  lng: number,
  precision?: number
): string => {
  const geohash = gh.encode(lat, lng, precision || 9);
  return geohash;
};
