import { WebsFocusReadyToDig } from "@webs-features/_webs/focus/ready-to-dig/WebsFocusReadyToDig";
import { WebsFocusSearchButton } from "@webs-features/_webs/focus/search-button/WebsFocusSearchButton";
import { WebsFocusSearchInput } from "@webs-features/_webs/focus/search-input/WebsFocusSearchInput";
import { WebsFocusSearchResults } from "@webs-features/_webs/focus/search-results/WebsFocusSearchResults";
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
  return (
    <div className={`flex flex-col w-full`}>
      <div
        className={`flex max-lg:flex-col max-lg:space-x-0 flex-row max-lg:w-full basis-5/7 space-x-4`}
      >
        <WebsFocusSearchInput basis={{ ...basis }} />

        <WebsFocusSearchButton basis={{ ...basis }} />

        <div
          className={`flex max-lg:w-full basis-2/7 max-lg:flex-col-reverse max-lg:space-x-0 flex-row space-x-4`}
        >
          <WebsFocusReadyToDig basis={{ ...basis }} />
        </div>
      </div>

      <WebsFocusSearchResults basis={{ ...basis }} />
    </div>
  );
};
