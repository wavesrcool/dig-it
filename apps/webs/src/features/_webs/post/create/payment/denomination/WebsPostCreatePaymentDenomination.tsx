import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  TypesShapesWebsDigCreateShapeAmountType,
  writeWebsDigCreateShapeAmountType,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsPostCreatePaymentDenomination = {
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
export const WebsPostCreatePaymentDenomination: React.FC<
  TypesWebsPostCreatePaymentDenomination
> = ({ basis }: TypesWebsPostCreatePaymentDenomination) => {
  useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const lcWebsPostCreatePaymentDenominationToggle = React.useCallback(
    (type: TypesShapesWebsDigCreateShapeAmountType) => {
      //
      // @notes:
      fold(writeWebsDigCreateShapeAmountType(type));

      // end
      return;
    },
    [fold]
  );

  return (
    <div
      className={`flex flex-row w-full items-center justify-center space-x-2`}
    >
      <ComponentsButton
        basis={{
          ...basis,
          cl: `flex-1 rounded-full text-bold btn-primary text-xl ${
            WebsDigCreateShape.amountType === "fiat"
              ? `btn-secondary-focus`
              : `btn-outline`
          }`,
          text: `$`,
          click: () => lcWebsPostCreatePaymentDenominationToggle("fiat"),
        }}
      />

      <button
        className={`btn btn-primary rounded-full text-xl flex-1 ${
          WebsDigCreateShape.amountType === "btc"
            ? `btn-secondary-focus`
            : `btn-outline`
        }`}
        onClick={() => lcWebsPostCreatePaymentDenominationToggle("btc")}
      >
        {`₿`}
        <span className={`font-mono text-xs pl-1`}>{`sats`}</span>
      </button>
    </div>
  );
};

/*


      <ComponentsButton
        basis={{
          ...basis,
          cl: `flex-1 rounded-full btn-primary text-xl ${
            
          }`,
          text: ` sats`,
          click: lcWebsPostCreatePaymentDenominationToggle,
        }}
      />

*/
