import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { useFold } from "@webs-shapes/hooks";
import { writeWebsDrawerShapeVisibleToggle } from "@webs-shapes/webs/drawer/WebsDrawerShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
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
  const { t } = useTranslation(basis.dictionary);

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
            cl: `btn-ghost text-slate-700 text-7xl lg:text-5xl hover:bg-transparent group-hover:text-slate-600 `,
            text: `⤺`,
            click: lcWebsDrawerVisibleToggle,
          }}
        />
      </div>

      <div className={`flex flex-col w-full space-y-4`}>
        <div className={`flex flex-row w-full px-4 pt-8`}>
          <p className={"font-montserrat font-regular text-3xl"}>
            {`${t(`glossary:`, `Hello!`)}`}
          </p>
        </div>

        <div className={`flex flex-col w-full px-2 pt-4 space-y-4`}>
          <p className={"font-montserrat font-regular text-xl"}>
            {`${t(`glossary:`, `Welcome to dig-it.earth! `)}`}
          </p>
          <p className={"font-montserrat font-regular text-lg text-justify"}>
            {`${t(
              `glossary:`,
              `This website was created for city folks who have lawns of grass they would like to see become gardens. The site is simple and privacy focused by design. We do not collect information on users of the site or use third party services for the map. `
            )}`}
          </p>
        </div>
      </div>
    </div>
  );
};
