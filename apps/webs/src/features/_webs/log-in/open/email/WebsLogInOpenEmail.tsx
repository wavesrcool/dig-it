import { ComponentsInput } from "@webs-components/input/ComponentsInput";
import { useWindow } from "@webs-hooks/use-window";
import { useFold, useShape } from "@webs-shapes/hooks";

import {
  ofWebsLogInShape,
  writeWebsLogInShapeBundlesEmail,
} from "@webs-shapes/webs/log-in/WebsLogInShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsLogInOpenEmail = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 22 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsLogInOpenEmail: React.FC<TypesWebsLogInOpenEmail> = ({
  basis,
}: TypesWebsLogInOpenEmail) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const WebsLogInShape = useShape(ofWebsLogInShape);
  const lcWebsLogInOpenEmailCycle = React.useCallback(
    (value: string) => {
      //
      // @notes:
      fold(writeWebsLogInShapeBundlesEmail(value));

      // end
      return;
    },
    [fold]
  );

  const { 0: ww } = useWindow();

  return (
    <div className={`flex flex-col w-full space-y-2 pt-6 max-lg:px-1`}>
      <div className={`flex flex-row w-full`}>
        <p className={"font-dongle font-bold text-3xl opacity-80 px-4"}>
          {`${t(
            `glossary:enter_your_email_address`,
            `enter_your_email_address`
          )}`}
        </p>
      </div>
      <div className={`flex flex-row w-full`}>
        <ComponentsInput
          basis={{
            ...basis,
            cl: `w-full rounded-full bg-base-200/50 font-semibold max-lg:pl-4 pl-8 text-neutral/80`,
            // disabled: WebsLogInShape.disabled,
            placeholder: ww < 450 ? `` : `gardenpuzzle8@earth.email`,
            value: WebsLogInShape.bundlesEmail.letters,
            change: lcWebsLogInOpenEmailCycle,
          }}
        />
      </div>
    </div>
  );
};
