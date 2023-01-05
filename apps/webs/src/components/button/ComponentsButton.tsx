import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import * as React from "react";

export type TypesComponentsButton = {
  basis: TypesWebsBasis & TypesFiguresComponentsButton;
};

export type TypesFiguresComponentsButton = {
  cl?: string;
  text: string;
  click?: () => void;
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const ComponentsButton: React.FC<TypesComponentsButton> = ({
  basis,
}: TypesComponentsButton) => {
  return (
    <button className={`btn ${basis.cl || ``}`} onClick={basis.click}>
      {basis.text}
    </button>
  );
};
