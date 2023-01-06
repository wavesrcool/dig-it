import { LibraryGeocodeMatches } from "@dig-it/library/lib/geocode/matches/LibraryGeocodeMatches";
import { ComponentsInput } from "@webs-components/input/ComponentsInput";
import { ComponentsLoading } from "@webs-components/loading/ComponentsLoading";
import { WebsModalCityResults } from "@webs-features/_webs/modal/city/results/WebsModalCityResults";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeCityBundle,
  writeWebsDigCreateShapeCityPlace,
  writeWebsDigCreateShapeCityResults,
  writeWebsDigCreateShapeEntracteFalse,
  writeWebsDigCreateShapeEntracteTrue,
  writeWebsDigCreateShapeInverseFalse,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { envwebs } from "_env";

const { GEOCODE_KEY } = envwebs;

export type TypesWebsModalCity = {
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
export const WebsModalCity: React.FC<TypesWebsModalCity> = ({
  basis,
}: TypesWebsModalCity) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const lcaWebsModalCityOnChange = React.useCallback(
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

      if (WebsDigCreateShape.entracte || !WebsDigCreateShape.cityBundle.pass) {
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
      fold(writeWebsDigCreateShapeEntracteTrue());

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
          fold(writeWebsDigCreateShapeEntracteFalse());
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
      WebsDigCreateShape.cityBundle.pass,
      WebsDigCreateShape.cityPlace,
      WebsDigCreateShape.entracte,
      fold,
    ]
  );

  return (
    <div className={`flex flex-col w-full space-y-2`}>
      <div className={`flex flex-row w-full`}>
        <p className={"font-sans font-bold text-base opacity-80 px-4"}>
          {`${t(`glossary.city`, `What city is the dig in?`)}`}
        </p>
      </div>
      <div className={`flex flex-row w-full`}>
        <ComponentsInput
          basis={{
            ...basis,
            cl: `w-full rounded-full bg-base-200/50 font-semibold pl-4`,
            disabled: WebsDigCreateShape.disabled,
            placeholder: `Search to find your city`,
            value: WebsDigCreateShape.cityPlace
              ? `${WebsDigCreateShape.cityPlace.town}, ${WebsDigCreateShape.cityPlace.lands}`
              : WebsDigCreateShape.cityBundle.letters,
            change: lcaWebsModalCityOnChange,
          }}
        />

        <div
          className={`flex max-lg:w-12 max-lg:-ml-12 w-16 -ml-16 flex-1 items-center justify-center z-10  `}
        >
          {WebsDigCreateShape.entracte ? (
            <ComponentsLoading
              basis={{ ...basis, cl: `max-lg:scale-75 scale-[80%]` }}
            />
          ) : null}
        </div>
      </div>

      <WebsModalCityResults basis={{ ...basis }} />
    </div>
  );
};
