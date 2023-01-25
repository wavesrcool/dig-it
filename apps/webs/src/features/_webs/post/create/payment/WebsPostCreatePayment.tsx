import { WebsPostCreatePaymentAmount } from "@webs-features/_webs/post/create/payment/amount/WebsPostCreatePaymentAmount";
import { WebsPostCreatePaymentDenomination } from "@webs-features/_webs/post/create/payment/denomination/WebsPostCreatePaymentDenomination";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsPostCreatePayment = {
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
export const WebsPostCreatePayment: React.FC<TypesWebsPostCreatePayment> = ({
  basis,
}: TypesWebsPostCreatePayment) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div className={`flex flex-col w-full space-y-2 max-lg:px-1`}>
      <div className={`flex flex-row w-full`}>
        <p className={"font-dongle font-bold text-3xl opacity-80 px-4"}>
          {`${t(`glossary:`, `How much would you like to offer?`)}`}
        </p>
      </div>

      <div
        className={`flex max-lg:flex-col max-lg:space-y-3 max-lg:space-x-0  flex-row w-full space-x-2 items-center`}
      >
        <div className={`flex flex-row max-lg:flex-1 basis-4/7`}>
          <WebsPostCreatePaymentAmount basis={{ ...basis }} />
        </div>
        <div className={`flex flex-row max-lg:w-full basis-3/7 `}>
          <WebsPostCreatePaymentDenomination basis={{ ...basis }} />
        </div>
      </div>
    </div>
  );
};
