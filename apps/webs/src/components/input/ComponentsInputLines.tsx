import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import * as React from "react";

export type TypesComponentsInputLines = {
  basis: TypesWebsBasis & TypesFiguresComponentsInputLines;
};

export type TypesFiguresComponentsInputLines = {
  cl?: string;
  type?: React.HTMLInputTypeAttribute;
  change: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  value: string;
};

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const ComponentsInputLines: React.FC<TypesComponentsInputLines> = ({
  basis,
}: TypesComponentsInputLines) => {
  return (
    <textarea
      value={basis.value}
      disabled={basis.disabled || false}
      placeholder={basis.placeholder ? ` ${basis.placeholder}` : ``}
      className={`textarea ${basis.cl || ``}`}
      onChange={({ target: { value } }) => basis.change(value)}
    />
  );
};
