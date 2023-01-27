import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { WebsPostCreateCity } from "@webs-features/_webs/post/create/city/WebsPostCreateCity";
import { WebsPostCreateContact } from "@webs-features/_webs/post/create/contact/WebsPostCreateContact";
import { WebsPostCreateDescription } from "@webs-features/_webs/post/create/description/WebsPostCreateDescription";
import { WebsPostCreateNeighborhood } from "@webs-features/_webs/post/create/neighborhood/WebsPostCreateNeighborhood";
import { WebsPostCreatePayment } from "@webs-features/_webs/post/create/payment/WebsPostCreatePayment";
import { useLocale } from "@webs-hooks/use-locale";
import { useDigItGraphDigsCreateOpenMutation } from "@webs-library/graph/hooks";
import { useFold, useShape } from "@webs-shapes/hooks";
import {
  ofWebsDigCreateShape,
  writeWebsDigCreateShapeEntracteFalse,
  writeWebsDigCreateShapeEntracteTrue,
  writeWebsDigCreateShapeInverseFalse,
  writeWebsDigCreateShapeInverseTrue,
  writeWebsDigCreateShapeView,
} from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsPostCreate = {
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
export const WebsPostCreate: React.FC<TypesWebsPostCreate> = ({
  basis,
}: TypesWebsPostCreate) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const WebsDigCreateShape = useShape(ofWebsDigCreateShape);

  const locale = useLocale();

  const [g0001] = useDigItGraphDigsCreateOpenMutation();

  const lcaWebsPostCreateSubmit = React.useCallback(async () => {
    //
    // @notes:
    if (WebsDigCreateShape.entracte) {
      return;
    }

    //
    // run
    const run = async () => {
      //
      // conditions

      if (!WebsDigCreateShape.cityPlace) {
        fold(
          writeWebsDigCreateShapeInverseTrue(
            `glossary:please_enter_the_city_where_you_live`
          )
        );
        return;
      }

      if (!WebsDigCreateShape.bundlesAmount.pass) {
        fold(
          writeWebsDigCreateShapeInverseTrue(
            `glossary:please_enter_an_amount_you_are_willing_to_offer`
          )
        );
        return;
      }

      if (!WebsDigCreateShape.bundlesNeighb.pass) {
        fold(
          writeWebsDigCreateShapeInverseTrue(
            `glossary:please_enter_the_neighborhood_you_are_located_in`
          )
        );
        return;
      }

      if (!WebsDigCreateShape.bundlesContact.pass) {
        if (WebsDigCreateShape.bundlesContact.letters) {
          fold(
            writeWebsDigCreateShapeInverseTrue(
              `glossary:please_enter_a_valid_email_address`
            )
          );
        } else {
          fold(
            writeWebsDigCreateShapeInverseTrue(
              `glossary:please_enter_an_email_address_where_you_can_be_contacted`
            )
          );
        }

        return;
      }

      // error false
      fold(writeWebsDigCreateShapeInverseFalse());

      // loading start
      fold(writeWebsDigCreateShapeEntracteTrue());

      try {
        //
        // start

        const { data: g0001d } = await g0001({
          variables: {
            figure: {
              locale,
              dig: {
                email: WebsDigCreateShape.bundlesContact.letters,
                description: WebsDigCreateShape.bundlesDesc.letters,
                value: WebsDigCreateShape.bundlesAmount.letters,
                money: WebsDigCreateShape.amountType,
                neighborhood: WebsDigCreateShape.bundlesNeighb.letters,
                line: WebsDigCreateShape.cityPlace.line,
                city: WebsDigCreateShape.cityPlace.city,
                region: WebsDigCreateShape.cityPlace.region,
                country: WebsDigCreateShape.cityPlace.country,
                lat: WebsDigCreateShape.cityPlace.center[0].toString(),
                lng: WebsDigCreateShape.cityPlace.center[1].toString(),
              },
            },
          },
        });

        console.log(JSON.stringify(g0001d, null, 4), `resp`);

        if (g0001d?.DigItGraphDigsCreateOpen.pass) {
          fold(writeWebsDigCreateShapeView("confirm"));
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
    WebsDigCreateShape.bundlesAmount.letters,
    WebsDigCreateShape.bundlesAmount.pass,
    WebsDigCreateShape.amountType,
    WebsDigCreateShape.cityPlace,
    WebsDigCreateShape.bundlesContact.letters,
    WebsDigCreateShape.bundlesContact.pass,
    WebsDigCreateShape.bundlesDesc.letters,
    WebsDigCreateShape.entracte,
    WebsDigCreateShape.bundlesNeighb.letters,
    WebsDigCreateShape.bundlesNeighb.pass,
    fold,
    g0001,
    locale,
  ]);

  return (
    <div className={`flex flex-col w-full`}>
      <div className={`flex flex-row w-full justify-center py-4 `}>
        <svg
          xmlns={"http://www.w3.org/2000/svg"}
          fill={"none"}
          viewBox={"0 0 24 24"}
          strokeWidth={1.5}
          stroke={"currentColor"}
          className={"w-6 h-6"}
        >
          <path
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            d={
              "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            }
          />
        </svg>
      </div>

      <div className={`flex flex-row w-full pt-2 pb-4 px-6`}>
        <p className={"font-dongle font-medium text-3xl text-justify"}>
          {`${t(
            `glossary:start_your_journey_from_lawn_watcher_to_urban_gardener`,
            `start_your_journey_from_lawn_watcher_to_urban_gardener`
          )}! ${t(
            `glossary:use_the_form_below_to_let_your_community_know_you_want_to_turn_your_lawn_into_a_food_garden`,
            `use_the_form_below_to_let_your_community_know_you_want_to_turn_your_lawn_into_a_food_garden`
          )}.`}
        </p>
      </div>

      <div
        className={`flex flex-col w-full py-3 max-lg:px-0 px-4 space-y-2 max-lg:px-4`}
      >
        <WebsPostCreateCity basis={{ ...basis }} />
        <WebsPostCreatePayment basis={{ ...basis }} />
        <WebsPostCreateNeighborhood basis={{ ...basis }} />
        <WebsPostCreateDescription basis={{ ...basis }} />
        <WebsPostCreateContact basis={{ ...basis }} />
      </div>

      <div className={`flex flex-row w-full py-2 px-8`}>
        <p className={"font-dongle font-medium text-xl text-justify"}>
          {`${t(
            `glossary:`,
            `We will use your email to send a one time pass code and will notify you when you receive replies to your post`
          )}.`}
        </p>
      </div>

      {WebsDigCreateShape.inverse ? (
        <div className={`flex flex-row w-full px-6 pt-2`}>
          <div className={`flex items-center space-x-2`}>
            <div className={`flex `}>
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
            </div>

            <div className={`flex pt-1`}>
              <p className={"font-dongle font-medium text-3xl text-error "}>
                {WebsDigCreateShape.thread
                  ? `${t(
                      `${WebsDigCreateShape.thread}`,
                      `${WebsDigCreateShape.thread}`
                    )}.`
                  : `${t(
                      `glossary:there_was_an_error_with_the_request`,
                      `there_was_an_error_with_the_request`
                    )}`}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className={`flex flex-row w-full justify-center px-4 pt-8`}>
        <ComponentsButton
          basis={{
            ...basis,
            cl: `rounded-full btn-primary w-full ${
              WebsDigCreateShape.entracte ? `loading` : ``
            } ${
              WebsDigCreateShape.inverse
                ? `btn-error cursor-not-allowed opacity-40`
                : ``
            }`,

            text: `${t(`glossary:create`, `create`)}`,
            click: lcaWebsPostCreateSubmit,
          }}
        />
      </div>
    </div>
  );
};
