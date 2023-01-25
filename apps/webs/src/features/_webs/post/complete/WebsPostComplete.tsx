import { ComponentsButton } from "@webs-components/button/ComponentsButton";

import { useShape } from "@webs-shapes/hooks";
import { ofRootShape } from "@webs-shapes/root/RootShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesWebsPostComplete = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 05 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsPostComplete: React.FC<TypesWebsPostComplete> = ({
  basis,
}: TypesWebsPostComplete) => {
  const { t } = useTranslation(basis.dictionary);

  const RootShape = useShape(ofRootShape);
  const router = useRouter();

  const lcaWebsPostComplete = React.useCallback(async () => {
    //
    // @notes:

    //
    // conditions
    if (!RootShape.token) {
      console.log(`NO TOKEN!`);

      // router.push(`/`);
      return;
    }

    // error false
    // fold()

    // loading start
    // fold()

    //
    // run
    const run = async () => {
      try {
        //
        // start

        router.push(`/view?token=${RootShape.token}`);

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        // fold()
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [RootShape.token, router]);

  return (
    <div className={`flex flex-col w-full`}>
      <div className={`flex flex-col w-full max-lg:px-1 px-4 pt-4`}>
        <p className={"font-dongle font-medium text-2xl"}>
          {`Your dig has been posted!`}
        </p>
      </div>

      <div className={`flex flex-col w-full py-3 max-lg:px-0 px-4 space-y-2`}>
        {"content"}
      </div>

      <div className={`flex flex-row w-full justify-end px-4 pt-4`}>
        <ComponentsButton
          basis={{
            ...basis,
            cl: `btn-primary rounded-full`,
            text: `${t("glossary:", "View your post")}`,
            click: lcaWebsPostComplete,
          }}
        />
      </div>
    </div>
  );
};
