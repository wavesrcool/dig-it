/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import RootShape from "@webs-shapes/root/RootShape";
import WebsDigCreateShape from "@webs-shapes/webs/dig-create/WebsDigCreateShape";
import WebsDrawerShape from "@webs-shapes/webs/drawer/WebsDrawerShape";
import WebsMapShape from "@webs-shapes/webs/map/WebsMapShape";
import WebsSearchShape from "@webs-shapes/webs/search/WebsSearchShape";

export function makeStore() {
  return configureStore({
    reducer: {
      RootShape,

      WebsDrawerShape,
      WebsSearchShape,
      WebsDigCreateShape,
      WebsMapShape,
    },
  });
}

const store = makeStore();

export type TypesWebsShape = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TypesWebsShape,
  unknown,
  Action<string>
>;

export default store;
