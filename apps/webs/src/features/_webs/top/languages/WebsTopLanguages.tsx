import { LibraryLocalesList } from "@dig-it/library/lib/locales/LibraryLocalesList";
import { useLocale } from "@webs-hooks/use-locale";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesWebsTopLanguages = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 26 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsTopLanguages: React.FC<TypesWebsTopLanguages> = ({
  basis,
}: TypesWebsTopLanguages) => {
  const { t } = useTranslation(basis.dictionary);

  const { push, asPath } = useRouter();

  const webslocale = useLocale();

  const lcaWebsTopLanguagesSelect = React.useCallback(
    (loc: string) => {
      //
      // @notes:

      //
      // conditions

      // error false
      // fold()

      // loading start
      // fold()

      //
      // run
      const run = async () => {
        try {
          //
          // start

          await push(asPath, asPath, { locale: loc });

          //
          // end
        } catch (e) {
          //
          // catch
        } finally {
          //
          // loading stop
          //
          // end
        }
      };
      run();

      //
      // end
      return;
    },
    [asPath, push]
  );

  return (
    <div className={`flex flex-col`}>
      <div className={"dropdown dropdown-end"}>
        <div className={`flex items-center justify-center`}>
          <label tabIndex={0} className={"btn btn-circle btn-ghost text-info"}>
            <div className={`flex text-neutral`}>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                fill={"none"}
                viewBox={"0 0 24 24"}
                strokeWidth={1.5}
                stroke={"currentColor"}
                className={"w-8 h-8"}
              >
                <path
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  d={
                    "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                  }
                />
              </svg>
            </div>
          </label>
        </div>
        <div
          tabIndex={0}
          className={
            "card compact dropdown-content shadow-md bg-white/95 rounded-box w-44 "
          }
        >
          <div className={"card-body py-2"}>
            <div className={`flex flex-col w-full py-1`}>
              <ul
                className={
                  "menu menu-compact lg:menu-normal p-2 rounded-box space-y-4"
                }
              >
                <li className={""}>
                  <a className={`h-10 `}>
                    <p className={"font-sans text-base text-neutral -py-1"}>
                      {`${t(
                        `common:locale.${webslocale}`,
                        `${webslocale}`.toUpperCase()
                      )}`}
                    </p>

                    <svg
                      xmlns={"http://www.w3.org/2000/svg"}
                      fill={"none"}
                      viewBox={"0 0 24 24"}
                      strokeWidth={1.5}
                      stroke={"currentColor"}
                      className={"w-4 h-4 text-primary"}
                    >
                      <path
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        d={"M4.5 12.75l6 6 9-13.5"}
                      />
                    </svg>
                  </a>
                </li>

                {LibraryLocalesList.filter((l) => !(l === webslocale)).map(
                  (loc) => {
                    return (
                      <li className={"flex-1"} key={loc}>
                        <a
                          className={"h-10"}
                          onClick={async () => lcaWebsTopLanguagesSelect(loc)}
                        >
                          <p className={"font-sans text-base text-neutral"}>
                            {`${t(`common:locale.${loc}`, ``)}`}
                          </p>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
 <div className={`flex text-neutral`}>
          <svg
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
            strokeWidth={1.5}
            stroke={"currentColor"}
            className={"w-8 h-8"}
          >
            <path
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              d={
                "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              }
            />
          </svg>
        </div>

*/
