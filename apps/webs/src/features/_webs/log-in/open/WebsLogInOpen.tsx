import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsLogInOpen = {
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
export const WebsLogInOpen: React.FC<TypesWebsLogInOpen> = ({
  basis,
}: TypesWebsLogInOpen) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div className={`flex flex-col w-full`}>{`${t(``, `WebsLogInOpen`)}`}</div>
  );
};
