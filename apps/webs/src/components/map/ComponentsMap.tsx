import { ComponentsMapPoint } from "@webs-components/map/point/ComponentsMapPoint";
import { useMap } from "@webs-hooks/use-map";
import { useWindow } from "@webs-hooks/use-window";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsMapShape,
  writeWebsMapShapeCenter,
  writeWebsMapShapeZoom,
} from "@webs-shapes/webs/map/WebsMapShape";
import { ofWebsSearchShape } from "@webs-shapes/webs/search/WebsSearchShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import { Map, Overlay } from "pigeon-maps";
import * as React from "react";

export type TypesComponentsMap = {
  basis: TypesWebsBasis & TypesFiguresComponentsMap;
};

export type TypesFiguresComponentsMap = {
  height?: number;
};
/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const ComponentsMap: React.FC<TypesComponentsMap> = ({
  basis,
}: TypesComponentsMap) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const { 1: winh } = useWindow();
  const { 0: mb } = useMap();

  const WebsSearchShape = useShape(ofWebsSearchShape);
  const WebsMapShape = useShape(ofWebsMapShape);

  const lcComponentsMapTouch = React.useCallback(
    (center: [number, number]) => {
      //
      // @notes:
      fold(writeWebsMapShapeCenter(center));

      // end
      return;
    },
    [fold]
  );

  const lcComponentsMapBoundsChange = React.useCallback(
    (center: [number, number], zoom: number) => {
      //
      // @notes:
      fold(writeWebsMapShapeZoom(~~zoom));
      fold(writeWebsMapShapeCenter(center));

      // end
      return;
    },
    [fold]
  );

  return mb ? (
    <>
      <Map
        attribution={
          <p
            className={
              "text-xs md:text-sm font-mono font-semibold text-slate-900/80"
            }
          >
            {`© dig-it.earth & OpenStreetMap ${`${t(
              `glossary:contributor_pl`,
              `contributors`
            )}`.toLowerCase()}`}
          </p>
        }
        attributionPrefix={false}
        dprs={[1, 2]}
        height={basis.height || winh / 1.5 || 0}
        twoFingerDrag={false}
        metaWheelZoom
        metaWheelZoomWarning={""}
        zoomSnap={false}
        center={
          WebsSearchShape.searchedPlace
            ? WebsSearchShape.searchedPlace.center
            : WebsMapShape.center
        }
        zoom={WebsMapShape.zoom}
        onBoundsChanged={({ center, zoom }) => {
          lcComponentsMapBoundsChange(center, zoom);
        }}
        onClick={({ latLng }) => {
          lcComponentsMapTouch(latLng);
        }}
      >
        <Overlay anchor={WebsMapShape.center} offset={[10.5, 15]}>
          <ComponentsMapPoint basis={{ ...basis }} />
        </Overlay>
      </Map>
    </>
  ) : null;
};
