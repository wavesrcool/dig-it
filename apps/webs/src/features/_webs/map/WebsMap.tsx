import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { ComponentsMap } from "components/map/ComponentsMap";
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
  return (
    <div className={`flex flex-row w-full bg-slate-100 rounded-[20px] p-3`}>
      <ComponentsMap basis={{ ...basis }} />
    </div>
  );
};
