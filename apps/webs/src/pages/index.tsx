import { ComponentsLoading } from "@webs-components/loading/ComponentsLoading";
import { WebsOrigin } from "@webs-features/_webs/WebsOrigin";
import { useLocale } from "@webs-hooks/use-locale";
import { useMap } from "@webs-hooks/use-map";
import { useDigItGraph0000Query } from "@webs-library/graph/hooks";
import { useFold, useShape } from "@webs-shapes/hooks";
import { ofRootShape, writeRootShapeDigs } from "@webs-shapes/root/RootShape";
import {
  writeWebsMapShapeAtHome,
  writeWebsMapShapeCenter,
  writeWebsMapShapeHome,
  writeWebsMapShapeShowHome,
} from "@webs-shapes/webs/map/WebsMapShape";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { configuration } from "../configuration";

const {
  I18N: { CONFIG },
  PAGES: {
    INDEX: { dictionary },
  },
} = configuration;

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs page
 * @notes [ ]
 *
 */
const WebsPagesIndex: NextPage = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  const fold = useFold();
  const { 0: mb } = useMap();
  const locale = useLocale();

  const { data: g0000d } = useDigItGraph0000Query({
    variables: { figure: { locale } },
  });

  React.useEffect(() => {
    //
    // @notes:
    setMounted(true);
    // end
    return;
  }, []);

  React.useEffect(() => {
    //
    // @notes:
    if (mb) {
      fold(writeWebsMapShapeHome(mb.center));
      fold(writeWebsMapShapeCenter(mb.center));
      fold(writeWebsMapShapeAtHome(true));
      fold(writeWebsMapShapeShowHome(true));
    }

    // end
    return;
  }, [fold, mb]);

  React.useEffect(() => {
    //
    // @notes:
    if (
      g0000d?.DigItGraph0000.pass &&
      g0000d?.DigItGraph0000?.data?.results?.length
    ) {
      fold(writeRootShapeDigs(g0000d.DigItGraph0000.data.results));
    }

    // end
    return;
  }, [
    fold,
    g0000d?.DigItGraph0000.data,
    g0000d?.DigItGraph0000.data?.results,
    g0000d?.DigItGraph0000.pass,
  ]);

  const RootShape = useShape(ofRootShape);

  return mounted && g0000d && g0000d.DigItGraph0000.pass && mb ? (
    <WebsOrigin basis={{ key: RootShape.basiskey, dictionary }} />
  ) : (
    <div
      className={`flex flex-row w-full h-screen justify-center items-center`}
    >
      <ComponentsLoading basis={{ key: RootShape.basiskey, dictionary }} />
    </div>
  );
};

export default WebsPagesIndex;

export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, dictionary, CONFIG)),
    },
  };
};
