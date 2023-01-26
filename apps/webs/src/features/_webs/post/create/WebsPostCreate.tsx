import { ComponentsButton } from "@webs-components/button/ComponentsButton";
import { WebsPostCreateCity } from "@webs-features/_webs/post/create/city/WebsPostCreateCity";
import { WebsPostCreateContact } from "@webs-features/_webs/post/create/contact/WebsPostCreateContact";
import { WebsPostCreateDescription } from "@webs-features/_webs/post/create/description/WebsPostCreateDescription";
import { WebsPostCreateNeighborhood } from "@webs-features/_webs/post/create/neighborhood/WebsPostCreateNeighborhood";
import { WebsPostCreatePayment } from "@webs-features/_webs/post/create/payment/WebsPostCreatePayment";
import { useLocale } from "@webs-hooks/use-locale";
import { useDigItGraph0001Mutation } from "@webs-library/graph/hooks";
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

  const [g0001] = useDigItGraph0001Mutation();

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
            `Please enter the city where you live`
          )
        );
        return;
      }

      if (!WebsDigCreateShape.bundlesAmount.pass) {
        fold(
          writeWebsDigCreateShapeInverseTrue(
            `Please enter an amount you are willing to pay`
          )
        );
        return;
      }

      if (!WebsDigCreateShape.bundlesNeighb.pass) {
        fold(
          writeWebsDigCreateShapeInverseTrue(
            `Please enter the neighborhood you are located in`
          )
        );
        return;
      }

      if (!WebsDigCreateShape.bundlesContact.pass) {
        if (WebsDigCreateShape.bundlesContact.letters) {
          fold(
            writeWebsDigCreateShapeInverseTrue(
              `Please enter a valid email address`
            )
          );
        } else {
          fold(
            writeWebsDigCreateShapeInverseTrue(
              `Please enter an email address where you can be contacted`
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

        if (g0001d?.DigItGraph0001.pass) {
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
      <div className={`flex flex-col w-full max-lg:px-1 px-4 pt-4`}>
        <p className={"font-dongle font-medium text-2xl"}>
          {`Start your journey from lawn watcher to urban gardener! Use the form below to let your community know you want to turn your lawn into a food garden.`}
        </p>
      </div>

      <div className={`flex flex-col w-full py-3 max-lg:px-0 px-4 space-y-2`}>
        <WebsPostCreateCity basis={{ ...basis }} />
        <WebsPostCreatePayment basis={{ ...basis }} />
        <WebsPostCreateNeighborhood basis={{ ...basis }} />
        <WebsPostCreateDescription basis={{ ...basis }} />
        <WebsPostCreateContact basis={{ ...basis }} />
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
            click: lcaWebsPostCreateSubmit,
          }}
        />
      </div>
    </div>
  );
};
