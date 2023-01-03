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

  const localtitle = `Home`; // @ todo derive from paths

  return (
    <>
      <Head>
        <title>{`${t(`common:title`, `Dig It!`)} ${
          localtitle ? `| ${localtitle}` : ``
        }`}</title>
      </Head>

      <div className={`flex flex-col w-full`}>
        <div className={`flex flex-row w-full`}>{`${t(``, `dig it!`)}`}</div>
      </div>
    </>
  );
};
