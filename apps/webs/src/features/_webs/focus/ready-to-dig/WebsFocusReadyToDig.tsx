import { useFold } from "@webs-shapes/hooks";
import { writeWebsDigCreateShapeVisible } from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { ComponentsButton } from "components/button/ComponentsButton";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsFocusReadyToDig = {
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
export const WebsFocusReadyToDig: React.FC<TypesWebsFocusReadyToDig> = ({
  basis,
}: TypesWebsFocusReadyToDig) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const lcWebsFocusReadyToDigClick = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDigCreateShapeVisible(true));

    // end
    return;
  }, [fold]);

  return (
    <div className={`flex flex-row w-full max-lg:pt-3`}>
      <ComponentsButton
        basis={{
          ...basis,
          cl: `btn-md btn-primary rounded-full w-full `,
          text: `${t(`glossary:ready_to_dig_q`, `Ready to dig ?`)}`,
          click: lcWebsFocusReadyToDigClick,
        }}
      />
    </div>
  );
};
