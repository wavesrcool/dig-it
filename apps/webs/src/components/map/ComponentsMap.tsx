import { ComponentsMapPoint } from "@webs-components/map/point/ComponentsMapPoint";
import { useMap } from "@webs-hooks/use-map";
import { useWindow } from "@webs-hooks/use-window";
import { Dig } from "@webs-library/graph/hooks";
import { useFold, useShape } from "@webs-shapes/hooks";
import { ofRootShape } from "@webs-shapes/root/RootShape";
import {
  ofWebsMapShape,
  writeWebsMapShapeCenter,
  writeWebsMapShapeVisibleAnchor,
  writeWebsMapShapeVisibleCenter,
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

  const RootShape = useShape(ofRootShape);
  const WebsMapShape = useShape(ofWebsMapShape);

  React.useEffect(() => {
    //
    // @notes:
    if (WebsMapShape.center && !WebsMapShape.visibleAnchorPersist) {
      fold(writeWebsMapShapeVisibleAnchor(false));
    }

    // end
    return;
  }, [WebsMapShape.center, WebsMapShape.visibleAnchorPersist, fold]);

  const lcComponentsMapTouch = React.useCallback(
    (center: [number, number]) => {
      //
      // @notes:

      fold(writeWebsMapShapeCenter(center));
      fold(writeWebsMapShapeVisibleCenter(true));
      fold(writeWebsMapShapeVisibleCenter(false));

      // end
      return;
    },
    [fold]
  );

  const lcComponentsMapBoundsChange = React.useCallback(
    (center: [number, number], zoom: number) => {
      //
      // @notes:

      const eq0 = center[0] === WebsMapShape.anchor[0];
      const eq1 = center[1] === WebsMapShape.anchor[1];

      if (!WebsMapShape.center && eq0 && eq1) {
        console.log(`bounds catch`);
        return;
      }
      console.log(`bounds change`);

      console.log(`${center[0]}`);
      console.log(`${WebsMapShape.anchor[0]}`);
      console.log(``);
      console.log(`${center[1]}`);
      console.log(`${WebsMapShape.anchor[1]}`);

      // console.log(`ANCHOR ${WebsMapShape.anchor[0]} ${WebsMapShape.anchor[1]}`);

      fold(writeWebsMapShapeZoom(zoom));
      fold(writeWebsMapShapeCenter(center));

      // end
      return;
    },
    [WebsMapShape.anchor, WebsMapShape.center, fold]
  );

  const lcComponentsMapPressCenterPoint = React.useCallback(() => {
    //
    // @notes:
    console.log(`center`);

    // end
    return;
  }, []);

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
        center={WebsMapShape.center || WebsMapShape.anchor}
        zoom={WebsMapShape.zoom}
        onBoundsChanged={({ center, zoom }) => {
          lcComponentsMapBoundsChange(center, zoom);
        }}
        onClick={({ latLng }) => {
          lcComponentsMapTouch(latLng);
        }}
      >
        {WebsMapShape.visibleAnchor ? (
          <Overlay anchor={WebsMapShape.anchor} offset={[10.5, 15]}>
            <ComponentsMapPoint
              basis={{
                ...basis,
                title: ``,
                content: (
                  <div
                    className={`flex flex-col w-full space-y-2 pl-2 text-neutral`}
                  >
                    <div className={`flex flex-row w-full`}>
                      <p className={"font-mono font-medium text-md"}>
                        {`${mb.city}, ${mb.country[0]}`}
                      </p>
                    </div>
                    <div className={`flex flex-col w-full`}>
                      <div className={`flex flex-row`}>
                        <p className={"font-mono font-medium text-md"}>
                          {`lat:`}
                          <span className={"pl-2"}> {`${mb.center[0]}`}</span>
                        </p>
                      </div>
                      <div className={`flex flex-row space-x-1`}>
                        <p className={"font-mono font-medium text-md"}>
                          {`lng:`}
                          <span className={"pl-2"}> {`${mb.center[1]}`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ),
                click: lcComponentsMapPressCenterPoint,
              }}
            />
          </Overlay>
        ) : null}

        {/* WebsSearchShape.searchedPlace ? (
          <Overlay anchor={WebsMapShape.home} offset={[10.5, 15]}>
            <ComponentsMapPoint
              basis={{
                ...basis,
                title: WebsSearchShape.searchedPlace.line,
                content: <div className={`flex `}>{"hello"}</div>,
                click: lcComponentsMapPressPrimaryPoint,
              }}
            />
          </Overlay>
        ) : null */}

        {(RootShape.digs as Dig[])?.map((dig) => {
          const anc: [number, number] = [
            Number(dig.place.geo.lat),
            Number(dig.place.geo.lng),
          ];
          return (
            <Overlay key={dig.key} anchor={anc} offset={[10.5, 15]}>
              <ComponentsMapPoint
                basis={{
                  ...basis,
                  title: ``,
                  content: (
                    <div
                      className={`flex flex-col w-full space-y-2 pl-2 text-neutral`}
                    >
                      <div className={`flex flex-row w-full`}>
                        <p className={"font-mono font-medium text-md"}>
                          {`${dig.place.city}, ${dig.place.country}`}
                        </p>
                      </div>
                      <div className={`flex flex-col w-full`}>
                        <div className={`flex flex-row`}>
                          <p className={"font-mono font-medium text-md"}>
                            {`lat:`}
                            <span className={"pl-2"}> {`${anc[0]}`}</span>
                          </p>
                        </div>
                        <div className={`flex flex-row space-x-1`}>
                          <p className={"font-mono font-medium text-md"}>
                            {`lng:`}
                            <span className={"pl-2"}> {`${anc[1]}`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ),
                  click: () => null,
                }}
              />
            </Overlay>
          );
        })}
      </Map>
    </>
  ) : null;
};
