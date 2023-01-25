import { ComponentsInput } from "@webs-components/input/ComponentsInput";
import { useWindow } from "@webs-hooks/use-window";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeNbBundle,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsPostCreateNeighborhood = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 22 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsPostCreateNeighborhood: React.FC<
  TypesWebsPostCreateNeighborhood
> = ({ basis }: TypesWebsPostCreateNeighborhood) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);
  const lcWebsPostCreateNeighborhoodCycle = React.useCallback(
    (value: string) => {
      //
      // @notes:
      fold(writeWebsDigCreateShapeNbBundle(value));

      // end
      return;
    },
    [fold]
  );

  const { 0: ww } = useWindow();

  return (
    <div className={`flex flex-col w-full space-y-2 pt-6 max-lg:px-1`}>
      <div className={`flex flex-row w-full`}>
        <p className={"font-dongle font-bold text-3xl opacity-80 px-4"}>
          {`${t(`glossary.city`, `What neighborhood are you in?`)}`}
        </p>
      </div>
      <div className={`flex flex-row w-full`}>
        <ComponentsInput
          basis={{
            ...basis,
            cl: `w-full rounded-full bg-base-200 font-semibold max-lg:pl-4 pl-8 text-neutral/80`,
            disabled: WebsDigCreateShape.disabled,
            placeholder: ww < 450 ? `` : `Specify the area of your city`,
            value: WebsDigCreateShape.nbBundle.letters,
            change: lcWebsPostCreateNeighborhoodCycle,
          }}
        />
      </div>
    </div>
  );
};
