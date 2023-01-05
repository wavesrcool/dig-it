import { useFold } from "@webs-shapes/hooks";
import { writeWebsDrawerShapeVisibleToggle } from "@webs-shapes/webs/drawer/WebsDrawerShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { ComponentsButton } from "components/button/ComponentsButton";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsDrawer = {
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
export const WebsDrawer: React.FC<TypesWebsDrawer> = ({
  basis,
}: TypesWebsDrawer) => {
  useTranslation(basis.dictionary);

  const fold = useFold();

  const lcWebsDrawerVisibleToggle = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDrawerShapeVisibleToggle());

    // end
    return;
  }, [fold]);

  return (
    <div
      className={`z-50 fixed top-0 left-0 flex flex-col w-80 h-screen max-md:w-full px-4 space-y-4 bg-white shadow-inner border-slate-200/30 border-r-8 max-md:border-l-8`}
    >
      <div className={`group flex flex-row w-full pt-6 `}>
        <ComponentsButton
          basis={{
            ...basis,
            cl: `btn-ghost text-slate-700 text-2xl lg:text-5xl hover:bg-transparent group-hover:text-slate-600 `,
            text: `⤺`,
            click: lcWebsDrawerVisibleToggle,
          }}
        />
      </div>

      <div className={`flex `}>{"dig it!"}</div>
    </div>
  );
};
