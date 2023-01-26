import { useFold } from "@webs-shapes/hooks";
import { writeWebsDrawerShapeVisibleToggle } from "@webs-shapes/webs/drawer/WebsDrawerShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import * as React from "react";

export type TypesWebsDrawer = {
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
export const WebsDrawer: React.FC<TypesWebsDrawer> = ({
  basis,
}: TypesWebsDrawer) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const lcWebsDrawerVisibleToggle = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDrawerShapeVisibleToggle());

    // end
    return;
  }, [fold]);

  return (
    <div
      className={`z-50 fixed top-0 left-0 flex flex-col w-88 h-screen max-md:w-full px-4 space-y-4 bg-white shadow-inner border-slate-200/30 border-r-8 max-md:border-l-8`}
    >
      <div className={`flex flex-col w-full space-y-4 pt-16`}>
        <div
          className={`flex flex-row w-full justify-center `}
          onClick={lcWebsDrawerVisibleToggle}
        >
          <svg
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
            strokeWidth={1.5}
            stroke={"currentColor"}
            className={"w-8 h-8 text-neutral"}
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
        <div
          className={`flex flex-row w-full items-center space-x-4 px-4 pt-8`}
        >
          <p className={"font-sans font-regular text-4xl"}>
            {`${t(`glossary:hello`, `hello`)}`}
          </p>

          <div className={`flex pt-1`}>
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              fill={"none"}
              viewBox={"0 0 24 24"}
              strokeWidth={1.5}
              stroke={"currentColor"}
              className={"w-8 h-8 text-neutral"}
            >
              <path
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                d={
                  "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                }
              />
            </svg>
          </div>
        </div>

        <div className={`flex flex-col w-full px-4 pt-2 space-y-4`}>
          <p className={"font-sans font-regular text-2xl"}>
            {`${t(`glossary:welcome_to`, `welcome_to`)} dig-it.earth!`}
          </p>
          <p className={"font-sans font-regular text-lg text-justify"}>
            {`${t(
              `glossary.`,
              `This website was created for city folks who have lawns of grass they would like to see become gardens.`
            )}`}
          </p>
          <p className={"font-sans font-regular text-lg text-justify"}>
            {`${t(
              `glossary.`,
              `The website is a hobby project based on a love of gardening and local food. It's certainly simple and still under development! If you have any questions, comments, or issues please`
            )}`}
            <span
              className={`text-underline text-blue-500/50 font-sans font-semibold`}
            >
              <Link href={`mailto:info@dig-it.earth`}>
                {` ${t(
                  `glossary:send_an_email`,
                  `send_an_email`
                ).toLowerCase()} `}
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

/*
We do not collect information on users of the site or use third party services for the map. `


*/
