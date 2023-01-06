/* eslint-disable @typescript-eslint/no-explicit-any */
import { LibraryAttestStrings } from "../../../attest/strings/LibraryAttestStrings";
import { TypesGeocodePlace } from "../../_types/TypesGeocodePlace";
import { TypesResolveLibraryGeocodeKeyFilter } from "./TypesResolveLibraryGeocodeKeyFilter";

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryGeocodeKeyFilter = (
  geores: any
): TypesResolveLibraryGeocodeKeyFilter => {
  const { id: key0, resultType, address, position } = geores;

  const key = LibraryAttestStrings(key0);

  if (!key || !address || !position.lat || !position.lng) {
    return undefined;
  }

  const { lat, lng } = position;

  let value = ``;
  let town = ``;
  let lands = ``;
  let boundary = ``;

  const { countryCode: countryCode0, state: state0 } = address;

  const countryCode = LibraryAttestStrings(countryCode0);
  const state = LibraryAttestStrings(state0);

  if (!countryCode || !state) {
    return undefined;
  }

  // eslint-disable-next-line prefer-const
  boundary = countryCode;
  // eslint-disable-next-line prefer-const
  lands = state;

  if (resultType.toLowerCase().includes("house")) {
    const { houseNumber: houseNumber0, street: street0 } = address;
    const houseNumber = LibraryAttestStrings(houseNumber0);
    const street = LibraryAttestStrings(street0);

    if (!houseNumber || !street) {
      return undefined;
    }

    value += `${houseNumber} ${street}`;
  } else if (resultType.toLowerCase().includes("street")) {
    const { street: street0 } = address;
    const street = LibraryAttestStrings(street0);
    if (!street) {
      return undefined;
    }
    value += `${street}`;
  } else if (resultType.toLowerCase().includes("locality")) {
    const { localityType: localityType0 } = geores;
    const localityType = LibraryAttestStrings(localityType0);
    if (localityType && localityType === "city") {
      value += localityType;
    }
  }

  const { city: city0 } = address;
  const city = LibraryAttestStrings(city0);
  if (!city) {
    const { county: county0 } = address;
    const county = LibraryAttestStrings(county0);
    if (!county) {
      return undefined;
    }
    town += `${county}`;
  }

  town += `${city}`;

  if (!value) {
    return undefined;
  }

  const place: TypesGeocodePlace = {
    key,
    value,
    town,
    lands,
    boundary,
    center: [Number(lat), Number(lng)],
  };

  return place;
};
