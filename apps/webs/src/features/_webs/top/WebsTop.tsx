/* eslint-disable @next/next/no-img-element */
import { useFold } from "@webs-shapes/hooks";
import { writeWebsDrawerShapeVisibleToggle } from "@webs-shapes/webs/drawer/WebsDrawerShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsTop = {
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
export const WebsTop: React.FC<TypesWebsTop> = ({ basis }: TypesWebsTop) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const lcWebsTopDrawerToggle = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDrawerShapeVisibleToggle());

    // end
    return;
  }, [fold]);

  return (
    <div className={`flex flex-row w-full h-20`}>
      <div className={`flex flex-row flex-1 items-center px-4 justify-between`}>
        <div
          className={`group flex flex-row space-x-4 items-center cursor-pointer `}
          onClick={lcWebsTopDrawerToggle}
        >
          <div
            className={`flex h-16 w-16 group-hover:scale-110 group-hover:opacity-80 `}
          >
            <img
              className={"mask mask-squircle"}
              src={`images/logo-96.png`}
              alt={`dig-it-logo`}
            />
          </div>

          <p className={"font-amberry text-4xl"}>
            {`${t(`common:title`, `dig it!`)}`.toLowerCase()}
          </p>
        </div>

        <div className={`flex h-full items-center`}>
          <p className={"font-amberry text-4xl"}>
            {`${t(`common:`, `where lawns become gardens!`)}`}
          </p>
        </div>
      </div>
    </div>
  );
};
