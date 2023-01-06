import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeAmountTypeToggle,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsModalPaymentDenomination = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 05 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsModalPaymentDenomination: React.FC<
  TypesWebsModalPaymentDenomination
> = ({ basis }: TypesWebsModalPaymentDenomination) => {
  useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const lcWebsModalPaymentDenominationToggle = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDigCreateShapeAmountTypeToggle());

    // end
    return;
  }, [fold]);

  return (
    <div
      className={`flex flex-row w-full items-center justify-center space-x-2`}
    >
      <ComponentsButton
        basis={{
          ...basis,
          cl: `flex-1 rounded-full text-bold btn-primary text-xl ${
            !WebsDigCreateShape.amountType
              ? `btn-secondary-focus`
              : `btn-outline`
          }`,
          text: `$`,
          click: lcWebsModalPaymentDenominationToggle,
        }}
      />

      <ComponentsButton
        basis={{
          ...basis,
          cl: `flex-1 rounded-full btn-primary text-xl ${
            WebsDigCreateShape.amountType
              ? `btn-secondary-focus`
              : `btn-outline`
          }`,
          text: `₿`,
          click: lcWebsModalPaymentDenominationToggle,
        }}
      />
    </div>
  );
};
