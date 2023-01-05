import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsMapShapeThread = "root";

export type TypesShapesWebsMapShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsMapShapeThread | "";
  //
  // shape type map WebsMapShape
  //

  zoom: number;
  center: [number, number];
};

export type TypesShapesWebsMapShape = {
  value: TypesShapesWebsMapShapeValue;
};

const initialState: TypesShapesWebsMapShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial WebsMapShape
    //

    zoom: 18,
    center: [0, 0],
  },
};

export const WebsMapShapeSlice = createSlice({
  name: "WebsMapShape",
  initialState,
  reducers: {
    initWebsMapShape: (state) => {
      state.value = initialState.value;
    },

    writeWebsMapShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeWebsMapShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeWebsMapShapeInverseTrue: (
      state,
      action: PayloadAction<TypesShapesWebsMapShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeWebsMapShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions WebsMapShape
    //

    writeWebsMapShapeZoom: (state, action: PayloadAction<number>) => {
      state.value = {
        ...state.value,
        zoom: action.payload,
      };
    },

    writeWebsMapShapeCenter: (
      state,
      action: PayloadAction<[number, number]>
    ) => {
      state.value = {
        ...state.value,
        center: action.payload,
      };
    },
  },
});

export const {
  initWebsMapShape,
  writeWebsMapShapeEntracteTrue,
  writeWebsMapShapeEntracteFalse,
  writeWebsMapShapeInverseTrue,
  writeWebsMapShapeInverseFalse,
  //
  // shape library WebsMapShape
  //

  writeWebsMapShapeCenter,
  writeWebsMapShapeZoom,
} = WebsMapShapeSlice.actions;

export const ofWebsMapShape = (
  state: TypesWebsShape
): TypesShapesWebsMapShapeValue => state.WebsMapShape.value;
export default WebsMapShapeSlice.reducer;
