import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { WebsPostConfirmPasscode } from "@webs-features/_webs/post/confirm/passcode/WebsPostConfirmPasscode";

import { useLocale } from "@webs-hooks/use-locale";
import { useDigItGraph0002Mutation } from "@webs-library/graph/hooks";
import { useFold, useShape } from "@webs-shapes/hooks";
import { writeRootShapeToken } from "@webs-shapes/root/RootShape";
import {
  initWebsDigCreateShape,
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeEntracteFalse,
  writeWebsDigCreateShapeInverseTrue,
  writeWebsDigCreateShapeView,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsPostConfirm = {
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
export const WebsPostConfirm: React.FC<TypesWebsPostConfirm> = ({
  basis,
}: TypesWebsPostConfirm) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const locale = useLocale();
  const [g0002] = useDigItGraph0002Mutation();

  const lcaWebsPostConfirmSubmit = React.useCallback(() => {
    //
    // @notes:

    //
    // conditionsasync
    if (WebsDigCreateShape.entracte) {
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

        if (!WebsDigCreateShape.bundlesPasscode.pass) {
          fold(
            writeWebsDigCreateShapeInverseTrue(
              `Please enter a 6 digit pass code`
            )
          );
          return;
        }

        const { data: g0002d } = await g0002({
          variables: {
            figure: {
              locale,
              email: WebsDigCreateShape.bundlesContact.letters,
              passcode: WebsDigCreateShape.bundlesPasscode.letters,
            },
          },
        });

        if (g0002d?.DigItGraph0002.pass && g0002d.DigItGraph0002.data?.token) {
          fold(writeRootShapeToken(g0002d.DigItGraph0002.data?.token));
          fold(writeWebsDigCreateShapeView("complete"));
          fold(initWebsDigCreateShape());
        }

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        fold(writeWebsDigCreateShapeEntracteFalse());
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [
    WebsDigCreateShape.bundlesContact.letters,
    WebsDigCreateShape.entracte,
    WebsDigCreateShape.bundlesPasscode.letters,
    WebsDigCreateShape.bundlesPasscode.pass,
    fold,
    g0002,
    locale,
  ]);

  return (
    <div className={`flex flex-col w-full`}>
      <div className={`flex flex-col w-full max-lg:px-1 px-4 pt-4`}>
        <p className={"font-dongle font-medium text-2xl"}>
          {`Great! We sent a pass code to the email address you provided. Please confirm your email to finalize the posting.`}
        </p>
      </div>

      <div className={`flex flex-col w-full py-3 max-lg:px-0 px-4 space-y-2`}>
        <WebsPostConfirmPasscode basis={{ ...basis }} />
      </div>

      {WebsDigCreateShape.inverse ? (
        <div className={`flex flex-row w-full items-center space-x-2 px-6`}>
          <svg
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
            strokeWidth={1.5}
            stroke={"currentColor"}
            className={"w-5 h-5 text-error"}
          >
            <path
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              d={
                "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              }
            />
          </svg>

          <p className={"font-dongle font-medium text-2xl text-error pt-1"}>
            {WebsDigCreateShape.thread
              ? `${WebsDigCreateShape.thread}.`
              : `There was an error with the submission`}
          </p>
        </div>
      ) : null}

      <div className={`flex flex-row w-full justify-end px-4 pt-4`}>
        <ComponentsButton
          basis={{
            ...basis,
            cl: `rounded-full ${WebsDigCreateShape.entracte ? `loading` : ``} ${
              WebsDigCreateShape.inverse
                ? `btn-error cursor-not-allowed opacity-40`
                : ``
            }`,

            text: `${t("glossary:", "Submit")}`,
            click: lcaWebsPostConfirmSubmit,
          }}
        />
      </div>
    </div>
  );
};
