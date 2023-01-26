// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

import { configuration } from "@webs-configuration/index";
import { apolloInstance } from "@webs-library/apollo/instance";
import {
  DigItGraph0003Document,
  DigItGraph0003Mutation,
} from "@webs-library/graph/hooks";
import { useFold } from "@webs-shapes/hooks";
import { writeRootShapeToken } from "@webs-shapes/root/RootShape";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

const {
  I18N: { CONFIG },
  PAGES: {
    INDEX: { dictionary },
  },
} = configuration;

const apolloclient = apolloInstance();

const WebsPagesView = ({ ...props }): JSX.Element => {
  const fold = useFold();
  const router = useRouter();

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
  return (
    <>
      <Head>
        <title>{`www.dig-it.earth`}</title>
      </Head>
    </>
  );
};

export default WebsPagesView;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  locale,
}: GetServerSidePropsContext) => {
  try {
    const email = params?.key1;
    if (!email || typeof email !== "string") {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    const token = query.auth;
    if (!token) {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    const { data: tGraph0003d } =
      await apolloclient.mutate<DigItGraph0003Mutation>({
        mutation: DigItGraph0003Document,
        variables: {
          figure: {
            locale: locale || "en",
            token,
          },
        },
      });

    console.log(JSON.stringify(tGraph0003d, null, 4), `tGraph0003d`);

    return {
      props: {
        ...(await serverSideTranslations(locale as string, dictionary, CONFIG)),
        token,
      },
    };
  } catch (e) {
    console.log(e, `Error. Page /account/[key1]`);
    return { redirect: { destination: "/", permanent: false }, props: {} };
  }
};
