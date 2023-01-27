import { WebsDrawer } from "@webs-features/_webs/drawer/WebsDrawer";
import { WebsTop } from "@webs-features/_webs/top/WebsTop";
import { useShape } from "@webs-shapes/hooks";
import { ofWebsDrawerShape } from "@webs-shapes/webs/drawer/WebsDrawerShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import * as React from "react";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs feature legend
 * @notes [ ]
 *
 */
export type TypesAccountOrigin = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const AccountOrigin: React.FC<TypesAccountOrigin> = ({
  basis,
}: TypesAccountOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const WebsDrawerShape = useShape(ofWebsDrawerShape);

  return (
    <>
      <Head>
        <title>{`${t(`common:title`, `Dig It!`)} | ${t(
          `glossary:home`,
          `home`
        )}`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-base-100 h-auto pt-4 pb-8 lg:py-2 max-lg:space-y-2 space-y-8 `}
      >
        <WebsTop basis={{ ...basis }} />

        <div className={`flex flex-col w-full`}>
          <div
            className={`flex flex-row w-full justify-center items-center space-x-2`}
          >
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              fill={"none"}
              viewBox={"0 0 24 24"}
              strokeWidth={1.5}
              stroke={"currentColor"}
              className={"w-6 h-6"}
            >
              <path
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                d={
                  "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                }
              />
            </svg>

            <p className={"font-sans font-medium italic text-lg "}>
              {"still under development!"}
            </p>
          </div>
        </div>
      </div>
      {WebsDrawerShape.visible ? <WebsDrawer basis={{ ...basis }} /> : null}
    </>
  );
};
