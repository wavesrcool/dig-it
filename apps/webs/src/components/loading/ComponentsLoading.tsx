import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsLoading = {
  basis: TypesWebsBasis & {
    tkey?: string;
  };
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs component
 * @notes [ ]
 *
 */
export const ComponentsLoading: React.FC<TypesComponentsLoading> = ({
  basis,
}: TypesComponentsLoading) => {
  const { t } = useTranslation(basis.dictionary);

  return (
    <div
      className={"flex flex-col justify-center items-center text-xl font-light"}
    >
      <svg
        className={"animate-spin h-8 w-8 text-slate-200"}
        xmlns={"http://www.w3.org/2000/svg"}
        fill={"white"}
        viewBox={"0 0 24 24"}
      >
        <circle
          className={"opacity-5"}
          cx={"12"}
          cy={"12"}
          r={"10"}
          stroke={"currentColor"}
          strokeWidth={"2"}
        />
        <path
          className={"opacity-75"}
          fill={"currentColor"}
          d={
            "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        />
      </svg>
      {basis.tkey ? (
        <div className={"opacity-50 mt-4"}>{t(basis.tkey, ``)}</div>
      ) : null}
    </div>
  );
};
