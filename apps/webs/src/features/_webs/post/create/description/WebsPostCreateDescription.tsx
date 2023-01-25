import { ComponentsInputLines } from "@webs-components/input/ComponentsInputLines";
import { useWindow } from "@webs-hooks/use-window";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeDescBundle,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsPostCreateDescription = {
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
export const WebsPostCreateDescription: React.FC<
  TypesWebsPostCreateDescription
> = ({ basis }: TypesWebsPostCreateDescription) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);
  const lcWebsPostCreateDescriptionCycle = React.useCallback(
    (value: string) => {
      //
      // @notes:
      fold(writeWebsDigCreateShapeDescBundle(value));

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
          {`${t(`glossary.city`, `Describe your dig (optional)`)}`}
        </p>
      </div>
      <div className={`flex flex-row w-full`}>
        <ComponentsInputLines
          basis={{
            ...basis,
            cl: `w-full rounded-full bg-base-200 font-semibold max-lg:pl-4 pl-8 text-neutral/80`,
            disabled: WebsDigCreateShape.disabled,
            placeholder:
              ww < 450 ? `` : `Say a few words about what you want to do`,
            value: WebsDigCreateShape.descBundle.letters,
            change: lcWebsPostCreateDescriptionCycle,
          }}
        />
      </div>
    </div>
  );
};
