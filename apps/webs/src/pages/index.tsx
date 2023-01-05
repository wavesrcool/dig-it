import { WebsOrigin } from "@webs-features/_webs/WebsOrigin";
import { useLocale } from "@webs-hooks/use-locale";
import { useMap } from "@webs-hooks/use-map";
import { useDigItGraph0000Query } from "@webs-library/graph/hooks";
import { useShape } from "@webs-shapes/hooks";
import { ofRootShape } from "@webs-shapes/root/RootShape";
import { ComponentsLoading } from "components/loading/ComponentsLoading";
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

  const { 0: mb } = useMap();
  const locale = useLocale();

  const { data: dgraph0000 } = useDigItGraph0000Query({
    variables: { figure: { locale } },
  });

  React.useEffect(() => {
    //
    // @notes:
    setMounted(true);
    // end
    return;
  }, []);

  const RootShape = useShape(ofRootShape);

  return mounted && dgraph0000 && dgraph0000.DigItGraph0000.pass && mb ? (
    <WebsOrigin basis={{ key: RootShape.basiskey, dictionary }} />
  ) : (
    <ComponentsLoading basis={{ key: RootShape.basiskey, dictionary }} />
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