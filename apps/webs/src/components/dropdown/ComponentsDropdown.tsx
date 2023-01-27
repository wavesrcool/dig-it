import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsDropdown = {
  basis: TypesWebsBasis & TypesFiguresComponentsDropdown;
};

export type TypesFiguresComponentsDropdown = {
  cl?: string;
  visible: boolean;
  button: JSX.Element;
  title: string;
  content: JSX.Element;
  close: () => void;
};

/**
 * * Dig It Documentation
 *
 * @created 01 27 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const ComponentsDropdown: React.FC<TypesComponentsDropdown> = ({
  basis,
}: TypesComponentsDropdown) => {
  useTranslation(basis.dictionary);
  const [b1, setB1] = React.useState<boolean>(false);
  return (
    <div
      className={`dropdown ${b1 ? `dropdown-open` : ``}`}
      onClick={() => setB1(true)}
    >
      {basis.button}
      <div
        tabIndex={0}
        className={"dropdown-content card card-compact w-64 shadow bg-base-100"}
      >
        <div className={"card-body"}>
          <div className={`flex flex-col w-full`}>
            <div className={`flex flex-row w-full`}>
              <div className={`flex w-8`} />

              <div className={`flex flex-1`}>
                <p className={"font-mono font-medium text-md"}>{basis.title}</p>
              </div>
              <div
                className={`flex w-8 flex-end cursor-pointer z-1000`}
                onClick={() => setB1(false)}
              >
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  fill={"none"}
                  viewBox={"0 0 24 24"}
                  strokeWidth={1.5}
                  stroke={"currentColor"}
                  className={"w-6 h-6"}
                >
                  <path
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    d={"M6 18L18 6M6 6l12 12"}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
