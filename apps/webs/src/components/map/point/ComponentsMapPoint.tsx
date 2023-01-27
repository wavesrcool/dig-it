import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsMapPoint = {
  basis: TypesWebsBasis & TypesFiguresComponentsMapPoint;
};

export type TypesFiguresComponentsMapPoint = {
  cl?: string;
  title: string;
  content: JSX.Element;
  click: () => void;
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
  const [b1, setB1] = React.useState<boolean>(false);

  const lcComponentsMapPointPressPrimary = React.useCallback(() => {
    //
    // @notes:
    basis.click();
    setB1(true);

    // end
    return;
  }, [basis]);

  return (
    <>
      <div
        className={`flex w-4 h-4 bg-white rounded-full p-1 ${
          b1 ? `` : `hover:scale-125`
        } cursor-pointer`}
        onClick={lcComponentsMapPointPressPrimary}
      >
        <div className={"bg-blue-400 flex-1 rounded-full"} />
      </div>
      <div className={`dropdown ${b1 ? `dropdown-open` : ``} `}>
        <div
          // tabIndex={0}
          className={
            "dropdown-content card card-compact -mt-4 w-64 shadow bg-base-100"
          }
        >
          <div className={"card-body"}>
            <div className={`flex flex-col w-full`}>
              <div className={`flex flex-row w-full`}>
                <div className={`flex w-8`} />

                <div className={`flex flex-1`}>
                  <p className={"font-mono font-medium text-md"}>
                    {basis.title}
                  </p>
                </div>
                <div
                  className={`flex w-8 flex-end text-neutral cursor-pointer `}
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
              <div className={`flex flex-col w-full`}>{basis.content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
