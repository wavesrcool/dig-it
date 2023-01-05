import axios from "axios";
import { TypesResolveLibraryGeocodeKey } from "./TypesResolveLibraryGeocodeKey";
import { LibraryGeocodeKeyFilter } from "./_filter/LibraryGeocodeKeyFilter";

/**
 * * Dig It Documentation
 *
 * @created 09 16 2022
 * @collection library asynchronous function
 * @notes [ ]
 *
 */
export const LibraryGeocodeKey = async (
  geokey: string,
  apikey: string
): Promise<TypesResolveLibraryGeocodeKey> => {
  try {
    const enckey = encodeURIComponent(geokey);
    const qs = `https://lookup.search.hereapi.com/v1/lookup?id=${enckey}&apiKey=${apikey}`;

    const { data: KEYS_RESULT } = await axios.get(qs);
    if (!KEYS_RESULT) {
      return `#-result`;
    }

    const place = LibraryGeocodeKeyFilter(KEYS_RESULT);

    if (!place) {
      return `#-filter`;
    }
    return place;
  } catch (e) {
    return `#`;
  }
};
