import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsLogInConfirm = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 25 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsLogInConfirm: React.FC<TypesWebsLogInConfirm> = ({
  basis,
}: TypesWebsLogInConfirm) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div className={`flex flex-col w-full`}>{`${t(
      ``,
      `WebsLogInConfirm`
    )}`}</div>
  );
};
