import { configuration } from "@webs-configuration/index";
import { AccountOrigin } from "@webs-features/account/AccountOrigin";
import { useLocale } from "@webs-hooks/use-locale";
import { apolloInstance } from "@webs-library/apollo/instance";
import {
  DigItGraph0003Document,
  DigItGraph0003Mutation,
  useDigItGraphSessionReadQuery,
} from "@webs-library/graph/hooks";
import { useFold, useShape } from "@webs-shapes/hooks";
import { ofRootShape, writeRootShapeEmail } from "@webs-shapes/root/RootShape";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import * as React from "react";

const {
  I18N: { CONFIG },
  PAGES: {
    INDEX: { dictionary },
  },
} = configuration;

const apolloclient = apolloInstance();

const WebsPagesView = (): JSX.Element => {
  const fold = useFold();
  const locale = useLocale();
  const RootShape = useShape(ofRootShape);

  const { data: gSessionReadd } = useDigItGraphSessionReadQuery({
    variables: { figure: { locale } },
  });

  React.useEffect(() => {
    //
    // @notes:
    if (
      gSessionReadd?.DigItGraphSessionRead.pass &&
      gSessionReadd?.DigItGraphSessionRead?.data?.email
    ) {
      fold(writeRootShapeEmail(gSessionReadd.DigItGraphSessionRead.data.email));
    }

    // end
    return;
  }, [
    fold,
    gSessionReadd?.DigItGraphSessionRead.data,
    gSessionReadd?.DigItGraphSessionRead.pass,
  ]);

  return (
    <>
      <Head>
        <title>{`www.dig-it.earth`}</title>
      </Head>

      <AccountOrigin basis={{ key: RootShape.basiskey, dictionary }} />
    </>
  );
};

export default WebsPagesView;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext) => {
  try {
    const email = params?.key1;
    if (!email || typeof email !== "string") {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    const { data: tGraph0003d } =
      await apolloclient.mutate<DigItGraph0003Mutation>({
        mutation: DigItGraph0003Document,
        variables: {
          figure: {
            locale: locale || "en",
          },
        },
      });

    console.log(JSON.stringify(tGraph0003d, null, 4), `tGraph0003d`);

    return {
      props: {
        ...(await serverSideTranslations(locale as string, dictionary, CONFIG)),
      },
    };
  } catch (e) {
    console.log(e, `Error. Page /account/[key1]`);
    return { redirect: { destination: "/", permanent: false }, props: {} };
  }
};

/*

  React.useEffect(() => {
    //
    // @notes:

    router.replace(`/account/${router.query.key1}`, undefined, {
      shallow: true,
    });
    fold(writeRootShapeToken(String(props.token || ``)));

    // end
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


*/
