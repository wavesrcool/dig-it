import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { WebsSearchInput } from "@webs-features/_webs/search/input/WebsSearchInput";
import { WebsSearchResults } from "@webs-features/_webs/search/results/WebsSearchResults";
import { useFold } from "@webs-shapes/hooks";
import { writeWebsDigCreateShapeVisible } from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import * as React from "react";

export type TypesWebsSearch = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsSearch: React.FC<TypesWebsSearch> = ({
  basis,
}: TypesWebsSearch) => {
  const fold = useFold();
  const lcWebsSearchTouchModalCreate = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDigCreateShapeVisible(true));

    // end
    return;
  }, [fold]);

  return (
    <div className={`flex flex-col w-full`}>
      <div
        className={`flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-lg:py-2 flex-row max-lg:w-full basis-5/7 space-x-4`}
      >
        <WebsSearchInput basis={{ ...basis }} />

        <ComponentsButton
          basis={{
            ...basis,
            cl: `btn-primary rounded-full `,
            text: `Post a new dig`,
            click: lcWebsSearchTouchModalCreate,
          }}
        />
      </div>

      <WebsSearchResults basis={{ ...basis }} />
    </div>
  );
};
