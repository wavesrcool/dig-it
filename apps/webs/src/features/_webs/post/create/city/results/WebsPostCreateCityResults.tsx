import { LibraryGeocodeKey } from "@dig-it/library/lib/geocode/key/LibraryGeocodeKey";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeCityPlace,
  writeWebsDigCreateShapeCityResults,
  writeWebsDigCreateShapeDisabled,
  writeWebsDigCreateShapeLoadingCity,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { envwebs } from "_env";

const { GEOCODE_KEY } = envwebs;

export type TypesWebsPostCreateCityResults = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 05 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsPostCreateCityResults: React.FC<
  TypesWebsPostCreateCityResults
> = ({ basis }: TypesWebsPostCreateCityResults) => {
  useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const lcaWebsPostCreateCityResults = React.useCallback(
    async (key: string) => {
      //
      // @notes:

      //
      // conditions
      fold(writeWebsDigCreateShapeDisabled(true));

      // error false
      // fold()

      // loading start
      fold(writeWebsDigCreateShapeLoadingCity(true));

      //
      // run
      const run = async () => {
        try {
          //
          // start

          const place = await LibraryGeocodeKey(key, GEOCODE_KEY);

          if (typeof place !== "string") {
            fold(writeWebsDigCreateShapeCityPlace(place));
          }

          //
          // end
        } catch (e) {
          //
          // catch
        } finally {
          //
          // loading stop
          fold(writeWebsDigCreateShapeDisabled(false));
          fold(writeWebsDigCreateShapeCityResults(undefined));
          fold(writeWebsDigCreateShapeLoadingCity(false));

          //
          // end
        }
      };
      run();

      //
      // end
      return;
    },
    [fold]
  );

  return (
    <div className={`flex flex-col py-2`}>
      {WebsDigCreateShape.cityResults
        ? WebsDigCreateShape.cityResults.map(({ key, value }) => {
            return (
              <div
                key={key}
                onClick={() => lcaWebsPostCreateCityResults(key)}
                className={`flex flex-row w-full justify-between pl-6 pr-4 py-3 opacity-90 hover:bg-secondary-focus/30 text-slate-700 hover:text-primary-focus rounded-full cursor-pointer`}
              >
                <p className={`font-sans font-medium text-base `}>{value}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};
