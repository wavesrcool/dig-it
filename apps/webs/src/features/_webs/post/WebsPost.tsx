import { WebsPostConfirm } from "@webs-features/_webs/post/confirm/WebsPostConfirm";
import { WebsPostCreate } from "@webs-features/_webs/post/create/WebsPostCreate";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  initWebsDigCreateShape,
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeVisible,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsPost = {
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
export const WebsPost: React.FC<TypesWebsPost> = ({ basis }: TypesWebsPost) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const lcWebsPostClose = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDigCreateShapeVisible(false));
    fold(initWebsDigCreateShape());

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
          <div
            className={`flex flex-col w-full h-full py-4 overflow-scroll ${
              WebsDigCreateShape.entracte ? `opacity-60` : ``
            }`}
          >
            <div
              className={`flex flex-row w-full max-lg:px-0 px-4 justify-center`}
            >
              <div className={`flex w-8`} />
              <div className={`flex flex-1 items-center justify-center`}>
                <h3 className={"font-dongle font-bold text-3xl"}>
                  {`${t(`glossary.create_a_dig`, `Dig it`)}!`}
                </h3>
              </div>
              <div
                className={`flex w-8  items-center justify-end cursor-pointer`}
                onClick={lcWebsPostClose}
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

            {WebsDigCreateShape.view === "create" ? (
              <WebsPostCreate basis={{ ...basis }} />
            ) : null}

            {WebsDigCreateShape.view === "confirm" ? (
              <WebsPostConfirm basis={{ ...basis }} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

/*
that will be sent out to urban farmers all you have to do is fill out the fields below. We don't take your exact address, but instead ask you to specify your neighborhood, and leave it to you to arrange the final details once farmers get in touch. "
                    

*/
