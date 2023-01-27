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

    if (
      tGraph0003d?.DigItGraph0003.pass &&
      tGraph0003d.DigItGraph0003.data?.email
    ) {
      return {
        redirect: {
          destination: `/account/${tGraph0003d.DigItGraph0003.data?.email}?auth=${token}`,
          permanent: false,
        },
        props: {},
      };
    }

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
