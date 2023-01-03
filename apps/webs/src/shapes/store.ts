/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import RootShape from "@webs-shapes/root/RootShape";

export function makeStore() {
  return configureStore({
    reducer: {
      RootShape,
    },
  });
}

const store = makeStore();

export type WebsShape = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  WebsShape,
  unknown,
  Action<string>
>;

export default store;
