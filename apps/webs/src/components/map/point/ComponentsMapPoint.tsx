import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsMapPoint = {
  basis: TypesWebsBasis & TypesFiguresComponentsMapPoint;
};

export type TypesFiguresComponentsMapPoint = {
  cl?: string;
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const ComponentsMapPoint: React.FC<TypesComponentsMapPoint> = ({
  basis,
}: TypesComponentsMapPoint) => {
  useTranslation(basis.dictionary);

  return (
    <div
      className={`flex w-4 h-4 bg-white rounded-full p-1 hover:scale-125 z-10`}
    >
      <div className={`flex flex-1 bg-blue-400 rounded-full`} />
    </div>
  );
};
