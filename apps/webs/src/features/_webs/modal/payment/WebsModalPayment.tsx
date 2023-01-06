import { WebsModalPaymentAmount } from "@webs-features/_webs/modal/payment/amount/WebsModalPaymentAmount";
import { WebsModalPaymentDenomination } from "@webs-features/_webs/modal/payment/denomination/WebsModalPaymentDenomination";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsModalPayment = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 06 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsModalPayment: React.FC<TypesWebsModalPayment> = ({
  basis,
}: TypesWebsModalPayment) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div className={`flex flex-col w-full space-y-2`}>
      <div className={`flex flex-row w-full`}>
        <p className={"font-sans font-bold text-base opacity-80 px-4"}>
          {`${t(`glossary.city`, `How much will you pay?`)}`}
        </p>
      </div>

      <div className={`flex flex-row w-full space-x-2 items-center`}>
        <div className={`flex flex-row basis-4/7`}>
          <WebsModalPaymentAmount basis={{ ...basis }} />
        </div>
        <div className={`flex flex-row basis-3/7`}>
          <WebsModalPaymentDenomination basis={{ ...basis }} />
        </div>
      </div>
    </div>
  );
};
