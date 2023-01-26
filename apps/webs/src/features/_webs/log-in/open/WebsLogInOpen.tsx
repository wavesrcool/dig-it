import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { WebsLogInOpenEmail } from "@webs-features/_webs/log-in/open/email/WebsLogInOpenEmail";
import { useLocale } from "@webs-hooks/use-locale";
import { useDigItGraphLogInOpenMutation } from "@webs-library/graph/hooks";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsLogInShape,
  writeWebsLogInShapeEntracteFalse,
  writeWebsLogInShapeEntracteTrue,
  writeWebsLogInShapeInverseFalse,
  writeWebsLogInShapeInverseTrue,
  writeWebsLogInShapeView,
} from "@webs-shapes/webs/log-in/WebsLogInShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsLogInOpen = {
  basis: TypesWebsBasis;
};

/**
 * * Dig It Documentation
 *
 * @created 01 25 2023
 * @collection webs feature
 * @notes [ ]
 *
 */
export const WebsLogInOpen: React.FC<TypesWebsLogInOpen> = ({
  basis,
}: TypesWebsLogInOpen) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsLogInShape = useShape(ofWebsLogInShape);

  const locale = useLocale();
  const [gLogInOpen] = useDigItGraphLogInOpenMutation();

  const lcaWebsLogInOpenSubmit = React.useCallback(() => {
    //
    // @notes:

    //
    // conditions
    if (!WebsLogInShape.bundlesEmail.pass) {
      fold(
        writeWebsLogInShapeInverseTrue(
          `glossary:please_enter_a_valid_email_address`
        )
      );
      return;
    }

    // error false
    fold(writeWebsLogInShapeInverseFalse());

    // loading start
    fold(writeWebsLogInShapeEntracteTrue());

    //
    // run
    const run = async () => {
      try {
        //
        // start

        const { data: gLogInOpend } = await gLogInOpen({
          variables: {
            figure: {
              locale,
              email: WebsLogInShape.bundlesEmail.letters,
            },
          },
        });

        if (
          gLogInOpend?.DigItGraphLogInOpen.pass &&
          gLogInOpend.DigItGraphLogInOpen.data
        ) {
          fold(writeWebsLogInShapeView("confirm"));
          return;
        }

        if (gLogInOpend?.DigItGraphLogInOpen.message === `email-key`) {
          fold(
            writeWebsLogInShapeInverseTrue(
              `glossary:to_log_in_you_must_post_or_respond_to_a_dig`
            )
          );
          return;
        }

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        fold(writeWebsLogInShapeEntracteFalse());
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [
    WebsLogInShape.bundlesEmail.letters,
    WebsLogInShape.bundlesEmail.pass,
    fold,
    gLogInOpen,
    locale,
  ]);

  return (
    <div className={`flex flex-col w-full`}>
      <div className={`flex flex-col w-full py-3 max-lg:px-0 px-4 space-y-2`}>
        <WebsLogInOpenEmail basis={{ ...basis }} />
      </div>

      {WebsLogInShape.inverse ? (
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

          <p className={"font-dongle font-medium text-2xl text-error pt-2"}>
            {WebsLogInShape.thread
              ? `${t(`${WebsLogInShape.thread}`, `${WebsLogInShape.thread}`)}.`
              : `${t(
                  `glossary:there_was_an_error_with_the_request`,
                  `there_was_an_error_with_the_request`
                )}`}
          </p>
        </div>
      ) : null}

      <div className={`flex flex-row w-full justify-center px-4 pt-4`}>
        <ComponentsButton
          basis={{
            ...basis,
            cl: `rounded-full btn-primary w-full ${
              WebsLogInShape.entracte ? `loading` : ``
            } ${
              WebsLogInShape.inverse
                ? `btn-error cursor-not-allowed opacity-40`
                : ``
            }`,

            text: `${t(`glossary:log_in`, `log_in`)}`,
            click: lcaWebsLogInOpenSubmit,
          }}
        />
      </div>
    </div>
  );
};

/*

   <div className={`flex flex-col w-full max-lg:px-1 px-4 pt-4`}>
        <p className={"font-dongle font-medium text-2xl"}>
          {`To log in, use the email address `}
        </p>
      </div>

*/
