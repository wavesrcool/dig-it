import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsFooter = {
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
export const WebsFooter: React.FC<TypesWebsFooter> = ({
  basis,
}: TypesWebsFooter) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div className={`flex flex-col w-full py-2`}>
      <div className={`flex flex-row w-full border-t-2 border-slate-100 px-4 `}>
        <div
          className={`flex flex-row w-full py-4 items-center justify-center`}
        >
          <p className={"font-sans text-sm font-semibold text-slate-100"}>
            {`Dig-It! ${t(
              `glossary:is_an_open_source_project`,
              `is an open-source project`
            ).toLowerCase()}. ${t(
              `glossary:please_send_any_questions_or_comments_to`,
              `Please send any questions or comments to`
            )} tyson@dig-it.earth! `}
          </p>
        </div>
      </div>
    </div>
  );
};
