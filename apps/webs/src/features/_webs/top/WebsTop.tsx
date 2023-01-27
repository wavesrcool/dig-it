/* eslint-disable @next/next/no-img-element */
import { WebsTopAccount } from "@webs-features/_webs/top/account/WebsTopAccount";
import { WebsTopLanguages } from "@webs-features/_webs/top/languages/WebsTopLanguages";
import { useFold } from "@webs-shapes/hooks";
import { writeWebsDrawerShapeVisibleToggle } from "@webs-shapes/webs/drawer/WebsDrawerShape";
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

  const lcWebsTopDrawerToggle = React.useCallback(() => {
    //
    // @notes:
    fold(writeWebsDrawerShapeVisibleToggle());

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
        <WebsTopAccount basis={{ ...basis }} />
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
