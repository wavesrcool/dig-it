import { LibraryGeocodeMatches } from "@dig-it/library/lib/geocode/matches/LibraryGeocodeMatches";
import { ComponentsInput } from "@webs-components/input/ComponentsInput";
import { ComponentsLoading } from "@webs-components/loading/ComponentsLoading";
import { useWindow } from "@webs-hooks/use-window";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsSearchShape,
  writeWebsSearchShapeEntracteFalse,
  writeWebsSearchShapeEntracteTrue,
  writeWebsSearchShapeInverseFalse,
  writeWebsSearchShapeResults,
  writeWebsSearchShapeSearchedBundle,
} from "@webs-shapes/webs/search/WebsSearchShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { Search } from "react-feather";
import { envwebs } from "_env";

const { GEOCODE_KEY } = envwebs;

export type TypesWebsFocusSearchInput = {
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
export const WebsFocusSearchInput: React.FC<TypesWebsFocusSearchInput> = ({
  basis,
}: TypesWebsFocusSearchInput) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsSearchShape = useShape(ofWebsSearchShape);

  const lcaWebsFocusSearchInput = React.useCallback(
    (value: string) => {
      // @notes:

      fold(writeWebsSearchShapeSearchedBundle(value));

      //
      // conditions

      if (WebsSearchShape.entracte || !WebsSearchShape.searchedBundle.pass) {
        return;
      }

      if (!value) {
        fold(writeWebsSearchShapeResults(undefined));
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
      fold(writeWebsSearchShapeInverseFalse());

      // loading start
      fold(writeWebsSearchShapeEntracteTrue());

      //
      // run
      const run = async () => {
        try {
          //
          // start

          const matches = await LibraryGeocodeMatches(value, GEOCODE_KEY);

          if (typeof matches !== "string") {
            fold(writeWebsSearchShapeResults(matches));
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
          fold(writeWebsSearchShapeEntracteFalse());
          //
          // end
        }
      };
      run();

      //
      // end
      return;
    },
    [WebsSearchShape.entracte, WebsSearchShape.searchedBundle.pass, fold]
  );

  const { 0: ww } = useWindow();

  return (
    <div className={`flex flex-row w-full max-lg:pt-3`}>
      <div
        className={`flex max-lg:w-12 max-lg:-mr-12 w-16 -mr-16 flex-1 items-center justify-center z-10  `}
      >
        <Search className={"text-slate-400 "} size={20} />
      </div>
      <ComponentsInput
        basis={{
          ...basis,
          cl: `bg-slate-100 w-full rounded-full font-medium max-lg:text-lg text-base text-slate-600 tracking-wide placeholder:font-medium max-lg:placeholder:text-center max-lg:text-center max-lg:pl-6 pl-12`,
          disabled: WebsSearchShape.disabled,
          value: WebsSearchShape.searchedBundle.letters,
          placeholder:
            ww > 500
              ? `${t(
                  `glossary:search_anywhere_in_the_world_to_find_digs`,
                  `Search anywhere in the world to find digs`
                )}!`
              : `${t(
                  `glossary:search_to_find_digs`,
                  `Search the world for digs`
                )}!`,

          change: lcaWebsFocusSearchInput,
        }}
      />

      <div
        className={`flex max-lg:w-12 max-lg:-ml-12 w-16 -ml-16 flex-1 items-center justify-center z-10  `}
      >
        {WebsSearchShape.entracte ? (
          <ComponentsLoading
            basis={{ ...basis, cl: `max-lg:scale-75 scale-[80%]` }}
          />
        ) : null}
      </div>
    </div>
  );
};
