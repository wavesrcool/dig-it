import I18nConfig from "../../next-i18next.config";
import { TypesConfiguration } from "./types";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs config
 * @notes [ ]
 *
 */
export const configuration: TypesConfiguration = {
  GRAPH: {
    STATE_NAME: "_dig_it_graph_",
  },
  I18N: {
    CONFIG: I18nConfig,
  },
  IMAGES: {
    RES1: "https://placeimg.com/",
  },
  PAGES: {
    INDEX: {
      dictionary: [`common`],
    },
  },
};
