import { GetServerSideProps } from "next";
import Head from "next/head";

const WebsPagesAccount = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`www.dig-it.earth`}</title>
      </Head>
    </>
  );
};

export default WebsPagesAccount;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return { redirect: { destination: "/", permanent: false }, props: {} };
  } catch (e) {
    return { redirect: { destination: "/", permanent: false }, props: {} };
  }
};
