// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

import { configuration } from "@webs-configuration/index";
import { apolloInstance } from "@webs-library/apollo/instance";
import {
  DigItGraph0003Document,
  DigItGraph0003Mutation,
} from "@webs-library/graph/hooks";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const {
  I18N: { CONFIG },
  PAGES: {
    INDEX: { dictionary },
  },
} = configuration;

const apolloclient = apolloInstance();

const WebsPagesView = (): JSX.Element => {
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
  query,
  locale,
}: GetServerSidePropsContext) => {
  try {
    const token = query.key;
    if (!token) {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    console.log(token, `token`);

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

    if (tGraph0003d) {
      return {
        redirect: { destination: `/account/${token}`, permanent: false },
        props: {},
      };
    }

    console.log(JSON.stringify(tGraph0003d, null, 4), `tGraph0003d`);

    return {
      props: {
        ...(await serverSideTranslations(locale as string, dictionary, CONFIG)),
      },
    };
  } catch (e) {
    console.log(e, `Error. Page /view`);
    return { redirect: { destination: "/", permanent: false }, props: {} };
  }
};
