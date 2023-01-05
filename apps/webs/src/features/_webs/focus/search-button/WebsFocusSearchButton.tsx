import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { ComponentsButton } from "components/button/ComponentsButton";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsFocusSearchButton = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsFocusSearchButton: React.FC<TypesWebsFocusSearchButton> = ({
  basis,
}: TypesWebsFocusSearchButton) => {
  const { t } = useTranslation(basis.dictionary);

  const lcWebsFocusSearchButtonClick = React.useCallback(() => {
    //
    // @notes:

    // end
    return;
  }, []);

  return (
    <div className={`flex flex-row basis-1/7 max-lg:pt-3`}>
      <ComponentsButton
        basis={{
          ...basis,
          cl: `rounded-full w-full`,
          text: `${t(`glossary:search`, `search`)}`,
          click: lcWebsFocusSearchButtonClick,
        }}
      />
    </div>
  );
};
