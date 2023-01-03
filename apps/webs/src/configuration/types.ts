import I18nConfig from "../../next-i18next.config";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs types config
 * @notes [ ]
 *
 */
export type TypesConfiguration = {
  GRAPH: {
    STATE_NAME: string;
  };
  I18N: {
    CONFIG: typeof I18nConfig;
  };
  IMAGES: {
    RES1: string;
  };
  PAGES: {
    INDEX: {
      dictionary: string[];
    };
  };
};
