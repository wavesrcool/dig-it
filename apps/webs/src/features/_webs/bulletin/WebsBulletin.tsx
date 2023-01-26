import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

const blist: { key: string; message: string }[] = [
  { key: `one`, message: `hey i love this!` },
  { key: `two`, message: `hey i love this too!` },
  { key: `three`, message: `where's the fodo?` },
];

export type TypesWebsBulletin = {
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
export const WebsBulletin: React.FC<TypesWebsBulletin> = ({
  basis,
}: TypesWebsBulletin) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div className={`flex flex-col w-full max-lg:py-8`}>
      <div className={`flex flex-row w-full border-t-2 border-slate-100 px-4 `}>
        <div className={`flex flex-row w-full py-4 justify-center`}>
          <p
            className={
              "font-montserrat font-medium text-2xl uppercase text-white"
            }
          >
            {`${t(`glossary:bulletin`, `bulletin`)}`}
          </p>
        </div>
      </div>

      <div className={`flex flex-col w-full max-lg:py-4`}>
        {blist.map((bc, bcI) => {
          return (
            <div
              key={bc.key}
              className={`flex flex-row w-full py-2 ${
                bcI % 2 === 0 ? `justify-start` : `justify-end`
              }`}
            >
              <div
                className={`chat ${bcI % 2 === 0 ? `chat-start` : `chat-end`}`}
              >
                <div className={"chat-bubble"}>
                  <p className={"font-montserrat font-medium text-base "}>
                    {bc.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
