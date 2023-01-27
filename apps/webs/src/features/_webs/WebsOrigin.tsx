import { WebsDrawer } from "@webs-features/_webs/drawer/WebsDrawer";
import { WebsFooter } from "@webs-features/_webs/footer/WebsFooter";
import { WebsLogIn } from "@webs-features/_webs/log-in/WebsLogIn";
import { WebsMap } from "@webs-features/_webs/map/WebsMap";
import { WebsPost } from "@webs-features/_webs/post/WebsPost";
import { WebsSearch } from "@webs-features/_webs/search/WebsSearch";
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
export type TypesWebsOrigin = {
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
export const WebsOrigin: React.FC<TypesWebsOrigin> = ({
  basis,
}: TypesWebsOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const WebsDrawerShape = useShape(ofWebsDrawerShape);

  return (
    <>
      <Head>
        <title>{`${t(`common:title`, `Dig It!`)} | ${`${t(
          `glossary:find_farmers_to_dig_up_your_lawn`,
          `Find farmers to dig up your lawn`
        )}`}!`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-base-100 h-auto pt-4 pb-8 lg:py-2 max-lg:space-y-2 space-y-8 `}
      >
        <WebsTop basis={{ ...basis }} />

        <div className={`flex flex-col w-full space-y-4 max-md:px-4 px-[20%]`}>
          <WebsSearch basis={{ ...basis }} />
        </div>

        <div className={`flex flex-col w-full max-md:px-4 md:px-[20%]`}>
          <WebsMap basis={{ ...basis }} />
        </div>

        <div className={`flex flex-col w-full max-md:px-4 px-[20%]`}>
          <WebsFooter basis={{ ...basis }} />
        </div>
      </div>
      <WebsLogIn basis={{ ...basis }} />
      <WebsPost basis={{ ...basis }} />
      {WebsDrawerShape.visible ? <WebsDrawer basis={{ ...basis }} /> : null}
    </>
  );
};
