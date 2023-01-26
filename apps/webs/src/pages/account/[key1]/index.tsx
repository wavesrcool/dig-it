// SPDX-FileCopyrightText: © 2022 Tyson Lupul <t@radroots.io>

import { configuration } from "@webs-configuration/index";
import { apolloInstance } from "@webs-library/apollo/instance";

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
  params,
  locale,
}: GetServerSidePropsContext) => {
  try {
    console.log(!!apolloclient);

    const email = params?.key1;
    if (!email || typeof email !== "string") {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

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
