import { LibraryGeocodeMatches } from "@dig-it/library/lib/geocode/matches/LibraryGeocodeMatches";
import { ComponentsInput } from "@webs-components/input/ComponentsInput";
import { ComponentsLoading } from "@webs-components/loading/ComponentsLoading";
import { WebsPostCreateCityResults } from "@webs-features/_webs/post/create/city/results/WebsPostCreateCityResults";
import { useWindow } from "@webs-hooks/use-window";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeCityBundle,
  writeWebsDigCreateShapeCityPlace,
  writeWebsDigCreateShapeCityResults,
  writeWebsDigCreateShapeInverseFalse,
  writeWebsDigCreateShapeLoadingCity,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { envwebs } from "_env";

const { GEOCODE_KEY } = envwebs;

export type TypesWebsPostCreateCity = {
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
export const WebsPostCreateCity: React.FC<TypesWebsPostCreateCity> = ({
  basis,
}: TypesWebsPostCreateCity) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const lcaWebsPostCreateCityOnChange = React.useCallback(
    (value: string) => {
      //
      // @notes:

      //
      // conditions

      if (WebsDigCreateShape.cityPlace) {
        fold(writeWebsDigCreateShapeCityBundle(``));
        fold(writeWebsDigCreateShapeCityPlace(undefined));
        return;
      }

      fold(writeWebsDigCreateShapeCityBundle(value));

      if (WebsDigCreateShape.entracte || !WebsDigCreateShape.bundlesCity.pass) {
        return;
      }

      if (!value) {
        fold(writeWebsDigCreateShapeCityResults(undefined));
        return;
      }

      if (value.length < 3) {
        return;
      }

      if (value.length < 8) {
        if (value.length % 2 !== 0) {
          return;
        }
      }

      // error false
      fold(writeWebsDigCreateShapeInverseFalse());

      // loading start
      fold(writeWebsDigCreateShapeLoadingCity(true));

      //
      // run
      const run = async () => {
        try {
          //
          // start

          const matches = await LibraryGeocodeMatches(value, GEOCODE_KEY);

          if (typeof matches !== "string") {
            fold(writeWebsDigCreateShapeCityResults(matches));
            return;
          }

          //
          // end
        } catch (e) {
          //
          // catch
        } finally {
          //
          // loading stop
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
    [
      WebsDigCreateShape.bundlesCity.pass,
      WebsDigCreateShape.cityPlace,
      WebsDigCreateShape.entracte,
      fold,
    ]
  );

  const { 0: ww } = useWindow();
  return (
    <div className={`flex flex-col w-full space-y-2`}>
      <div className={`flex flex-row w-full`}>
        <p className={"font-dongle font-bold text-3xl opacity-80 px-4"}>
          {`${t(`glossary:what_city_are_you_in_q`, `what_city_are_you_in_q`)}`}
        </p>
      </div>
      <div className={`flex flex-row w-full max-lg:px-1`}>
        <ComponentsInput
          basis={{
            ...basis,
            cl: `w-full rounded-full bg-base-200/50 font-semibold max-lg:pl-4 pl-8 text-neutral/80 `,
            disabled: WebsDigCreateShape.disabled,
            placeholder:
              ww < 450
                ? ``
                : `${t(
                    `glossary:search_to_find_your_city`,
                    `search_to_find_your_city`
                  )}`,
            value: WebsDigCreateShape.cityPlace
              ? `${WebsDigCreateShape.cityPlace.city}, ${WebsDigCreateShape.cityPlace.region}`
              : WebsDigCreateShape.bundlesCity.letters,
            change: lcaWebsPostCreateCityOnChange,
          }}
        />

        <div
          className={`flex max-lg:w-12 max-lg:-ml-12 w-16 -ml-16 flex-1 items-center justify-center z-10  `}
        >
          {WebsDigCreateShape.loadingCity ? (
            <ComponentsLoading
              basis={{ ...basis, cl: `max-lg:scale-75 scale-[80%]` }}
            />
          ) : WebsDigCreateShape.cityPlace ? (
            <div className={`flex text-primary bg-transparent z-20 pl-2 `}>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                fill={"none"}
                viewBox={"0 0 24 24"}
                strokeWidth={1.5}
                stroke={"currentColor"}
                className={"w-5 h-5"}
              >
                <path
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  d={"M4.5 12.75l6 6 9-13.5"}
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>

      <WebsPostCreateCityResults basis={{ ...basis }} />
    </div>
  );
};
