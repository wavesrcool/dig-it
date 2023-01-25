import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import * as React from "react";

export type TypesComponentsLoading = {
  basis: TypesWebsBasis & TypesFiguresComponentsLoading;
};

export type TypesFiguresComponentsLoading = {
  cl?: string;
  text?: string;
};

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const ComponentsLoading: React.FC<TypesComponentsLoading> = ({
  basis,
}: TypesComponentsLoading) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-xl font-light ${
        basis.cl || ``
      }`}
    >
      <svg
        className={`animate-spin h-8 w-8 text-red-200`}
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
      {basis.text ? (
        <div className={"opacity-50 mt-4"}>{basis.text}</div>
      ) : null}
    </div>
  );
};
