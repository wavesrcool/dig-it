import { ComponentsMap } from "@webs-components/map/ComponentsMap";
import { useMap } from "@webs-hooks/use-map";
import { useFold } from "@webs-shapes/hooks";
import {
  TypesShapesWebsMapShapeZoomStep,
  writeWebsMapShapeAnchor,
  writeWebsMapShapeCenter,
  writeWebsMapShapeVisibleAnchor,
  writeWebsMapShapeZoomStep,
} from "@webs-shapes/webs/map/WebsMapShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import * as React from "react";

export type TypesWebsMap = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 04 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsMap: React.FC<TypesWebsMap> = ({ basis }: TypesWebsMap) => {
  const fold = useFold();

  const { 0: mapbasis } = useMap();

  const lcWebsMapTouchZoomStep = React.useCallback(
    (step: TypesShapesWebsMapShapeZoomStep) => {
      //
      // @notes:
      fold(writeWebsMapShapeZoomStep(step));

      // end
      return;
    },
    [fold]
  );

  const lcWebsMapTouchHome = React.useCallback(() => {
    //
    // @notes:
    if (mapbasis) {
      fold(writeWebsMapShapeCenter(undefined));
      fold(writeWebsMapShapeAnchor(mapbasis.center));
      fold(writeWebsMapShapeVisibleAnchor(true));
    }

    // end
    return;
  }, [fold, mapbasis]);

  return (
    <div className={`flex flex-row w-full bg-slate-100 rounded-[20px] py-4`}>
      <div className={`flex w-full -mr-[68px]`}>
        <ComponentsMap basis={{ ...basis }} />
      </div>
      <div className={`flex flex-col w- pt-3`}>
        <ul
          className={"menu bg-base-100 rounded-box opacity-90 text-neutral/80"}
        >
          <li>
            <a onClick={() => lcWebsMapTouchZoomStep("inc")}>
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
                  d={"M12 4.5v15m7.5-7.5h-15"}
                />
              </svg>
            </a>
          </li>
          <li>
            <a onClick={() => lcWebsMapTouchZoomStep("dec")}>
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
                  d={"M19.5 12h-15"}
                />
              </svg>
            </a>
          </li>
          <li>
            <a onClick={lcWebsMapTouchHome}>
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
                  d={
                    "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  }
                />
              </svg>
            </a>
          </li>
        </ul>

        <div className={`flex flex-1`} />
      </div>
    </div>
  );
};
