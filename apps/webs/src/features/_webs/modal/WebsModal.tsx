import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { WebsModalCity } from "@webs-features/_webs/modal/city/WebsModalCity";
import { WebsModalPayment } from "@webs-features/_webs/modal/payment/WebsModalPayment";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeVisible,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsModal = {
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
export const WebsModal: React.FC<TypesWebsModal> = ({
  basis,
}: TypesWebsModal) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const lcWebsModalClose = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDigCreateShapeVisible(false));

    // end
    return;
  }, [fold]);

  return WebsDigCreateShape.visible ? (
    <>
      <input
        type={"checkbox"}
        className={"modal-toggle"}
        checked={WebsDigCreateShape.visible}
        readOnly
      />
      <div className={`modal`}>
        <div
          className={` modal-box border-x-[8px] border-stone-200/30 border-opacity-50 `}
        >
          <div className={`flex flex-col w-full h-120`}>
            <div className={`flex flex-col w-full h-full overflow-scroll`}>
              <div className={`flex flex-col w-full h-full `}>
                <div className={`flex flex-row w-full `}>
                  <h3 className={"font-mono font-bold text-lg"}>
                    {`${t(`glossary.create_a_dig`, `Create a dig`)}!`}
                  </h3>
                </div>

                <div className={`flex flex-col w-full py-8 px-4 space-y-4`}>
                  <WebsModalCity basis={{ ...basis }} />
                  <WebsModalPayment basis={{ ...basis }} />
                </div>
              </div>
            </div>
          </div>

          <div className={`flex flex-row w-full justify-end px-4`}>
            <ComponentsButton
              basis={{
                ...basis,
                text: `${t("glossary:simple.ok", "ok")}`,
                click: lcWebsModalClose,
              }}
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};
