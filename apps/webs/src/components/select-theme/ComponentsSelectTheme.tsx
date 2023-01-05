import { LibraryWriteCapitalizedFirstLetter } from "@dig-it/library/lib/write/capitalized-first-letter/LibraryWriteCapitalizedFirstLetter";
import { LibraryWriteCapitalizedWords } from "@dig-it/library/lib/write/capitalized-words/LibraryWriteCapitalizedWords";
import { useTheme } from "@webs-hooks/use-theme";
import { TypesWebsBasis } from "@webs-types/basis/TypesWebsBasis";
import { TypesWebsThemes } from "@webs-types/themes/TypesWebsThemes";
import { TypesWebsThemesList } from "@webs-types/themes/_list/TypesWebsThemesList";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsSelectTheme = {
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
export const ComponentsSelectTheme: React.FC<TypesComponentsSelectTheme> = ({
  basis,
}: TypesComponentsSelectTheme) => {
  const { t } = useTranslation(basis.dictionary);

  const { 0: th, 1: setth } = useTheme();

  const lcComponentsSelectTheme = React.useCallback(
    (sth: string) => {
      //
      // @notes:

      let theme: TypesWebsThemes | undefined;

      TypesWebsThemesList.map((lth) => {
        if (lth === sth) {
          theme = lth;
        }
        return;
      });

      if (theme) {
        setth(theme);
      }

      // end
      return;
    },
    [setth]
  );

  return (
    <select
      className={"select select-bordered rounded-full"}
      data-choose-theme
      onChange={({ target: { value } }) => lcComponentsSelectTheme(value)}
    >
      <option disabled selected>
        {t(`glossary:themes`, LibraryWriteCapitalizedFirstLetter(`themes`))}
      </option>

      {TypesWebsThemesList.map((li) => (
        <option key={li} value={li} selected={li === th}>
          {t(`common:themes.${li}`, LibraryWriteCapitalizedWords(li))}
        </option>
      ))}
    </select>
  );
};
