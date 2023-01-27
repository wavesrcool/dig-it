import { useFold, useShape } from "@webs-shapes/hooks";
import { ofRootShape } from "@webs-shapes/root/RootShape";
import { writeWebsLogInShapeVisible } from "@webs-shapes/webs/log-in/WebsLogInShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesWebsTopAccount = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 27 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsTopAccount: React.FC<TypesWebsTopAccount> = ({
  basis,
}: TypesWebsTopAccount) => {
  useTranslation(basis.dictionary);

  const fold = useFold();
  const RootShape = useShape(ofRootShape);

  const { push } = useRouter();

  const lcWebsTopAccountTouchLogIn = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsLogInShapeVisible(true));

    // end
    return;
  }, [fold]);

  const lcaWebsTopAccountTouchDashboard = React.useCallback(() => {
    //
    // @notes:

    //
    // conditions
    if (!RootShape.email) {
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

        await push(`/account/${RootShape.email}`);

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
  }, [RootShape.email, push]);

  return (
    <div className={`flex `}>
      {RootShape.email ? (
        <a onClick={lcaWebsTopAccountTouchDashboard}>
          <p
            className={
              "font-dongle font-medium text-2xl text-neutral cursor-pointer hover:text-primary"
            }
          >
            {`${RootShape.email}`}
          </p>
        </a>
      ) : (
        <div
          className={`flex text-neutral `}
          onClick={lcWebsTopAccountTouchLogIn}
        >
          <svg
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
            strokeWidth={1.5}
            stroke={"currentColor"}
            className={"w-8 h-8"}
          >
            <path
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              d={
                "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              }
            />
          </svg>
        </div>
      )}
    </div>
  );
};
