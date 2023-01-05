import { TypesGeocodeMatch } from "../_types/TypesGeocodeMatch";
import { TypesResolveLibraryGeocodeMatchesMessage } from "./TypesResolveLibraryGeocodeMatchesMessage";

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @group library function resolve
 * @notes [ ]
 *
 */
export type TypesResolveLibraryGeocodeMatches =
  | TypesGeocodeMatch[]
  | TypesResolveLibraryGeocodeMatchesMessage;
