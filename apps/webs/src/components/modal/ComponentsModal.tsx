import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsModalContent = {
  title: string;
  el: JSX.Element;
};

export type TypesComponentsModal = {
  basis: TypesWebsBasis & TypesFiguresComponentsModal;
};

export type TypesFiguresComponentsModal = {
  cl?: string;
  visible: boolean;
  content: TypesComponentsModalContent;
  close: () => void;
};

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const ComponentsModal: React.FC<TypesComponentsModal> = ({
  basis,
}: TypesComponentsModal) => {
  const { t } = useTranslation(basis.dictionary);

  const lcComponentsModalClose = React.useCallback(() => {
    //
    // @notes:
    basis.close();

    // end
    return;
  }, [basis]);

  return basis.visible ? (
    <>
      <input
        type={"checkbox"}
        id={`dig-it-modal-toggle`}
        className={"modal-toggle"}
        checked={basis.visible}
        readOnly
      />
      <div id={`dig-it-modal-toggle`} className={`modal `}>
        <div
          className={`
          modal-box 
          h-72
          border-x-[8px]
          border-stone-200/30 border-opacity-50
          `}
        >
          <div
            className={`
          flex flex-col 
          w-full h-full 
          
        `}
          >
            <div
              className={`
          flex flex-col 
          w-full h-full 
        `}
            >
              <div className={`flex flex-row w-full `}>
                <h3 className={"font-mono font-bold text-lg"}>
                  {basis.content.title}
                </h3>
              </div>

              <div
                className={`flex flex-row w-full h-full px-2 justify-center items-center `}
              >
                {basis.content.el}
              </div>
            </div>

            <div className={"modal-action"} onClick={lcComponentsModalClose}>
              <label htmlFor={`dig-it-modal-toggle`} className={"btn"}>
                {`${t("glossary:simple.ok", "ok")}`}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
