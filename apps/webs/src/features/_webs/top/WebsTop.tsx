/* eslint-disable @next/next/no-img-element */
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
        <div className={`flex text-neutral`}>
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
                "M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              }
            />
          </svg>
        </div>
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
