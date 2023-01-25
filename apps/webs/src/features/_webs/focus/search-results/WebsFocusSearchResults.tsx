import { LibraryGeocodeKey } from "@dig-it/library/lib/geocode/key/LibraryGeocodeKey";
import { useFold, useShape } from "@webs-shapes/hooks";
import { writeWebsMapShapeZoom } from "@webs-shapes/webs/map/WebsMapShape";
import {
  ofWebsSearchShape,
  writeWebsSearchShapeDisabled,
  writeWebsSearchShapeEntracteFalse,
  writeWebsSearchShapeEntracteTrue,
  writeWebsSearchShapeResults,
  writeWebsSearchShapeSearchedBundle,
  writeWebsSearchShapeSearchedPlace,
} from "@webs-shapes/webs/search/WebsSearchShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { envwebs } from "_env";

const { GEOCODE_KEY } = envwebs;

export type TypesWebsFocusSearchResults = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsFocusSearchResults: React.FC<TypesWebsFocusSearchResults> = ({
  basis,
}: TypesWebsFocusSearchResults) => {
  useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsSearchShape = useShape(ofWebsSearchShape);

  const lcaWebsFocusSearchResults = React.useCallback(
    async (key: string) => {
      //
      // @notes:

      //
      // conditions

      // error false
      // fold()

      // loading start
      fold(writeWebsSearchShapeEntracteTrue());

      fold(writeWebsSearchShapeDisabled(true));
      //
      // run
      const run = async () => {
        try {
          //
          // start

          const place = await LibraryGeocodeKey(key, GEOCODE_KEY);

          if (typeof place !== "string") {
            fold(writeWebsSearchShapeSearchedPlace(place));
          }

          //
          // end
        } catch (e) {
          //
          // catch
        } finally {
          //
          // loading stop
          fold(writeWebsMapShapeZoom(12));
          fold(writeWebsSearchShapeSearchedBundle(``));
          fold(writeWebsSearchShapeResults(undefined));
          fold(writeWebsSearchShapeEntracteFalse());
          fold(writeWebsSearchShapeDisabled(false));

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

  return WebsSearchShape.results ? (
    <div className={`flex flex-col w-full pt-8 pb-4 space-y-2`}>
      {WebsSearchShape.results.map(({ key, value }) => {
        return (
          <div
            key={key}
            onClick={() => lcaWebsFocusSearchResults(key)}
            className={`flex flex-row w-full justify-between pl-6 pr-4 py-2 opacity-90 hover:bg-secondary-focus/30 text-slate-700 hover:text-primary-focus rounded-xl cursor-pointer`}
          >
            <p className={`font-sans font-medium text-base `}>{value}</p>
          </div>
        );
      })}
    </div>
  ) : null;
};
