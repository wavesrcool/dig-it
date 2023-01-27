/* eslint-disable @next/next/no-img-element */
import { WebsTopLanguages } from "@webs-features/_webs/top/languages/WebsTopLanguages";
import { useFold, useShape } from "@webs-shapes/hooks";
import { ofRootShape } from "@webs-shapes/root/RootShape";
import { writeWebsDrawerShapeVisibleToggle } from "@webs-shapes/webs/drawer/WebsDrawerShape";
import { writeWebsLogInShapeVisible } from "@webs-shapes/webs/log-in/WebsLogInShape";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesWebsTop = {
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
export const WebsTop: React.FC<TypesWebsTop> = ({ basis }: TypesWebsTop) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();
  const RootShape = useShape(ofRootShape);

  const lcWebsTopDrawerToggle = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDrawerShapeVisibleToggle());

    // end
    return;
  }, [fold]);

  const lcWebsTopTouchViewLogIn = React.useCallback(() => {
    //
    // @notes:

    fold(writeWebsLogInShapeVisible(true));

    // end
    return;
  }, [fold]);

  return (
    <div
      className={`flex max-lg:flex-col max-lg:space-y-2 max-lg:mb-4 flex-row w-full h-20 max-md:px-0 px-[20%] max-lg:justify-start justify-between`}
    >
      <div className={`flex flex-row max-lg:w-full max-lg:justify-center p-1`}>
        <div
          className={`flex flex-row  space-x-4 cursor-pointer  `}
          onClick={lcWebsTopDrawerToggle}
        >
          <div
            className={`flex h-16 w-auto group-hover:scale-110 group-hover:opacity-90 opacity-75`}
          >
            <img src={`/display/svg/shovel.svg`} alt={`dig-it-logo`} />
          </div>
          <div className={`flex flex-row items-center`}>
            <p className={"font-lust text-5xl text-neutral"}>
              {`${t(`common:title`, `dig it!`)}`.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`max-md:hidden flex flex-row max-lg:w-full max-lg:justify-center items-center space-x-4 justify-end flex-1`}
      >
        <WebsTopLanguages basis={{ ...basis }} />

        {RootShape.email ? (
          <p
            className={
              "font-dongle font-medium text-2xl  text-neutral cursor-pointer hover:text-primary"
            }
          >
            {`${RootShape.email}`}
          </p>
        ) : (
          <div
            className={`flex text-neutral `}
            onClick={lcWebsTopTouchViewLogIn}
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
    </div>
  );
};

/*
    <ComponentsButton
          basis={{
            ...basis,
            cl: ` btn-outline rounded-full flex-1`,
            text: `${t(`glossary.`, `How it works`)}`,
            click: lcWebsTopTouchViewLogIn,
          }}
        />
   
 <ComponentsButton
            basis={{
              ...basis,
              cl: ` rounded-full flex-1`,
              text: `${t(`glossary.`, `Log in`)}`,
              click: lcWebsTopTouchViewLogIn,
            }}
          />
          
    <ComponentsButton
          basis={{
            ...basis,
            cl: `btn-outline rounded-full`,
            text: `How it works`,
            click: () => null,
          }}
        />
   <div
      className={`flex flex-row w-full max-md:h-auto h-20 items-center px-4 justify-between`}
    >
      <div
        className={`flex flex-row flex-1 max-md:flex-col max-md:space-y-4 cursor-pointer  `}
      >
        <div
          className={`group flex flex-row h-full items-center `}
          onClick={lcWebsTopDrawerToggle}
        >
         
        </div>

        <div className={`flex flex-row items-center pl-8`}>
       
        </div>
      </div>

      <div className={`flex flex-row h-full flex-1 justify-end items-center`}>
   
      </div>
    </div>


*/
