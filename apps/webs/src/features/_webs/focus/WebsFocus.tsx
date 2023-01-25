import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { WebsFocusSearchInput } from "@webs-features/_webs/focus/search-input/WebsFocusSearchInput";
import { WebsFocusSearchResults } from "@webs-features/_webs/focus/search-results/WebsFocusSearchResults";
import { useFold } from "@webs-shapes/hooks";
import { writeWebsDigCreateShapeVisible } from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import * as React from "react";

export type TypesWebsFocus = {
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
export const WebsFocus: React.FC<TypesWebsFocus> = ({
  basis,
}: TypesWebsFocus) => {
  const fold = useFold();
  const lcWebsFocusTouchModalCreate = React.useCallback(() => {
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
        <WebsFocusSearchInput basis={{ ...basis }} />

        <ComponentsButton
          basis={{
            ...basis,
            cl: `btn-primary rounded-full`,
            text: `Post a new dig`,
            click: lcWebsFocusTouchModalCreate,
          }}
        />
      </div>

      <WebsFocusSearchResults basis={{ ...basis }} />
    </div>
  );
};

/*
        <WebsFocusSearchButton basis={{ ...basis }} />



        <div
          className={`flex max-lg:w-full basis-2/7 max-lg:flex-col-reverse max-lg:space-x-0 flex-row space-x-4`}
        >
          <WebsFocusReadyToDig basis={{ ...basis }} />
        </div>
*/
