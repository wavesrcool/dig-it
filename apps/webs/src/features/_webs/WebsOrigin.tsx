import { WebsDrawer } from "@webs-features/_webs/drawer/WebsDrawer";
import { WebsFocus } from "@webs-features/_webs/focus/WebsFocus";
import { WebsMap } from "@webs-features/_webs/map/WebsMap";
import { WebsTop } from "@webs-features/_webs/top/WebsTop";
import { useMap } from "@webs-hooks/use-map";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeVisible,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { ofWebsDrawerShape } from "@webs-shapes/webs/drawer/WebsDrawerShape";
import { writeWebsMapShapeCenter } from "@webs-shapes/webs/map/WebsMapShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { ComponentsModal } from "components/modal/ComponentsModal";
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
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);
  const localtitle = `Home`; // @ todo derive from paths

  const fold = useFold();
  const { 0: mb } = useMap();

  React.useEffect(() => {
    //
    // @notes:
    if (mb) {
      fold(writeWebsMapShapeCenter(mb.center));
    }

    // end
    return;
  }, [fold, mb]);

  const lcWebsOriginDigsCreateClose = React.useCallback(() => {
    //
    // @notes:

    fold(writeWebsDigCreateShapeVisible(false));

    // end
    return;
  }, [fold]);

  return (
    <>
      <Head>
        <title>{`${t(`common:title`, `Dig It!`)} ${
          localtitle ? `| ${localtitle}` : ``
        }`}</title>
      </Head>

      <ComponentsModal
        basis={{
          ...basis,
          visible: WebsDigCreateShape.visible,
          content: {
            title: `Create a dig!`,
            text: [
              {
                tkey: `glossary:to_start`,
              },
            ],
          },
          close: lcWebsOriginDigsCreateClose,
        }}
      />

      <div
        className={`flex flex-col w-full bg-base-100 h-auto pt-4 pb-8 lg:py-2 space-y-8 px-[8%]`}
      >
        {WebsDrawerShape.visible ? <WebsDrawer basis={{ ...basis }} /> : null}

        <WebsTop basis={{ ...basis }} />

        <div className={`flex flex-col w-full space-y-4`}>
          <WebsFocus basis={{ ...basis }} />
          <WebsMap basis={{ ...basis }} />
        </div>
      </div>
    </>
  );
};
