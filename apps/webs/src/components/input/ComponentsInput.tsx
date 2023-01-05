import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import * as React from "react";

export type TypesComponentsInput = {
  basis: TypesWebsBasis & TypesFiguresComponentsInput;
};

export type TypesFiguresComponentsInput = {
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
export const ComponentsInput: React.FC<TypesComponentsInput> = ({
  basis,
}: TypesComponentsInput) => {
  return (
    <input
      type={basis.type || "text"}
      value={basis.value}
      disabled={basis.disabled || false}
      placeholder={basis.placeholder ? ` ${basis.placeholder}` : ``}
      className={`input ${basis.cl || ``}`}
      onChange={({ target: { value } }) => basis.change(value)}
    />
  );
};
