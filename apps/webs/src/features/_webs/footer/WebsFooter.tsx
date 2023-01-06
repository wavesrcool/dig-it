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
          <p className={"font-lupines text-lg font-bold text-slate-700"}>
            {[
              `common:title`,
              `glossary:is_an_open_source_project`,
              `glossary:please_send_any_questions_or_comments_to`,
              `tyson@dig-it.earth`,
              `!`,
            ].map((text) => {
              if (text.includes(`@`)) {
                return (
                  <span
                    key={text}
                    className={`px-1 hover:text-blue-400 cursor-pointer`}
                  >
                    <a href={`mailto:${text}`}>{text.toLowerCase()}</a>
                  </span>
                );
              }
              return (
                <span key={text} className={`px-1 `}>
                  {t(text).toLowerCase()}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
