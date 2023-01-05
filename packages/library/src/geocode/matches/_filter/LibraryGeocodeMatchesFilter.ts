/* eslint-disable @typescript-eslint/no-explicit-any */
import { LibraryAttestStrings } from "../../../attest/strings/LibraryAttestStrings";
import { TypesGeocodeMatch } from "../../_types/TypesGeocodeMatch";

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection library synchronous function
 * @notes [ ]
 *
 */
export const LibraryGeocodeMatchesFilter = (
  geores: any
): TypesGeocodeMatch | undefined => {
  const { id, address } = geores;

  const key0 = LibraryAttestStrings(id);

  if (!key0 || !address) {
    return undefined;
  }

  const { countryName: countryName0, state: state0 } = address;

  const countryName = LibraryAttestStrings(countryName0);

  const state = LibraryAttestStrings(state0);

  if (!countryName || !state) {
    return undefined;
  }

  let value = ``;

  const { resultType } = geores;
  if (resultType === "street") {
    const { city: city0, street: street0 } = address;
    let city = LibraryAttestStrings(city0);
    const street = LibraryAttestStrings(street0);
    if (!city || !street) {
      return undefined;
    }

    if (city === state) {
      const { district: district0 } = address;
      const district = LibraryAttestStrings(district0);
      if (!district) {
        if (!district) {
          const { county: county0 } = address;
          const county = LibraryAttestStrings(county0);
          if (!county) {
            return undefined;
          }
          city = county;
        }
      } else {
        city = district;
      }
    }
    value += `${street}, ${city}, `;
    //
    //
    //  done
    //
  } else if (resultType === "houseNumber") {
    const { city: city0, street: street0, houseNumber: houseNumber0 } = address;
    const city = LibraryAttestStrings(city0);
    const street = LibraryAttestStrings(street0);
    const houseNumber = LibraryAttestStrings(houseNumber0);

    if (!city || !street || !houseNumber) {
      return undefined;
    }
    value += `${houseNumber} ${street}, ${city}, `;
    //
    //
    //  done
    //
  } else if (resultType === "locality") {
    const { localityType } = geores;
    if (localityType === "city") {
      const { city: city0 } = address;
      let city = LibraryAttestStrings(city0);

      if (!city) {
        return undefined;
      }

      if (city === state) {
        const { district: district0 } = address;
        const district = LibraryAttestStrings(district0);
        if (!district) {
          const { county: county0 } = address;
          const county = LibraryAttestStrings(county0);
          if (!county) {
            return undefined;
          }
          city = county;
        } else {
          city = district;
        }
      }

      value += `${city}, `;
      //
      //
      //  done
      //
    }

    //
    //
    //  done
    //
  }

  if (!value) {
    return undefined;
  }

  value += `${state}, ${countryName}`;

  if (value.includes("undefined")) {
    return undefined;
  }
  const matchres: TypesGeocodeMatch = {
    key: key0,
    value,
  };

  return matchres;
};
