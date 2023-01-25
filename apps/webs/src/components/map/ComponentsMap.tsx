import { ComponentsMapPoint } from "@webs-components/map/point/ComponentsMapPoint";
import { useMap } from "@webs-hooks/use-map";
import { useWindow } from "@webs-hooks/use-window";
import { Dig } from "@webs-library/graph/hooks";
import { useFold, useShape } from "@webs-shapes/hooks";
import { ofRootShape } from "@webs-shapes/root/RootShape";
import {
  ofWebsMapShape,
  writeWebsMapShapeCenter,
  writeWebsMapShapeShowCenter,
  writeWebsMapShapeZoom,
} from "@webs-shapes/webs/map/WebsMapShape";
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

  const WebsMapShape = useShape(ofWebsMapShape);
  const RootShape = useShape(ofRootShape);

  // console.log(JSON.stringify(WebsMapShape, null, 4), `WebsMapShape`);

  const lcComponentsMapTouch = React.useCallback(
    (center: [number, number]) => {
      //
      // @notes:

      fold(writeWebsMapShapeCenter(center));
      fold(writeWebsMapShapeShowCenter(true));

      // end
      return;
    },
    [fold]
  );

  const lcComponentsMapBoundsChange = React.useCallback(
    (center: [number, number], zoom: number) => {
      //
      // @notes:

      fold(writeWebsMapShapeZoom(zoom));
      fold(writeWebsMapShapeCenter(center));
      fold(writeWebsMapShapeShowCenter(false));

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
              "text-xs text-center justify-center font-sofia tracking-widest font-semibold text-slate-900/90"
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
        center={WebsMapShape.center}
        zoom={WebsMapShape.zoom}
        onBoundsChanged={({ center, zoom }) => {
          lcComponentsMapBoundsChange(center, zoom);
        }}
        onClick={({ latLng }) => {
          lcComponentsMapTouch(latLng);
        }}
      >
        {WebsMapShape.showHome ? (
          <Overlay anchor={WebsMapShape.home} offset={[10.5, 15]}>
            <ComponentsMapPoint basis={{ ...basis }} />
          </Overlay>
        ) : null}

        {(RootShape.digs as Dig[])?.map((dig) => {
          const anc: [number, number] = [
            Number(dig.place.geo.lat),
            Number(dig.place.geo.lng),
          ];
          return (
            <Overlay key={dig.key} anchor={anc} offset={[10.5, 15]}>
              <ComponentsMapPoint basis={{ ...basis }} />
            </Overlay>
          );
        })}
      </Map>
    </>
  ) : null;
};
