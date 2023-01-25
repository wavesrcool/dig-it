import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsMapShapeZoomStep = "inc" | "dec";

export type TypesShapesWebsMapShapeThread = "root";

export type TypesShapesWebsMapShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsMapShapeThread | "";
  //
  // shape type map WebsMapShape
  //

  zoom: number;

  home: [number, number];
  showHome: boolean;
  atHome: boolean;

  center: [number, number];
  showCenter: boolean;
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

    zoom: 12,
    home: [0, 0],
    showHome: true,
    atHome: true,

    center: [0, 0],
    showCenter: false,
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
      const zoom = Math.floor(action.payload);

      state.value = {
        ...state.value,
        zoom,
      };
    },

    writeWebsMapShapeZoomStep: (
      state,
      action: PayloadAction<TypesShapesWebsMapShapeZoomStep>
    ) => {
      let delta = 1;
      if (action.payload === "dec") {
        delta = -1;
      }
      const zoom = Math.floor(state.value.zoom + delta);
      state.value = {
        ...state.value,
        zoom,
      };
    },

    writeWebsMapShapeHome: (state, action: PayloadAction<[number, number]>) => {
      state.value = {
        ...state.value,
        home: action.payload,
      };
    },

    writeWebsMapShapeShowHome: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        showHome: action.payload,
      };
    },

    writeWebsMapShapeAtHome: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        atHome: action.payload,
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

    writeWebsMapShapeShowCenter: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        showCenter: action.payload,
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

  writeWebsMapShapeHome,
  writeWebsMapShapeAtHome,
  writeWebsMapShapeShowHome,

  writeWebsMapShapeCenter,
  writeWebsMapShapeShowCenter,
  writeWebsMapShapeZoom,
  writeWebsMapShapeZoomStep,
} = WebsMapShapeSlice.actions;

export const ofWebsMapShape = (
  state: TypesWebsShape
): TypesShapesWebsMapShapeValue => state.WebsMapShape.value;
export default WebsMapShapeSlice.reducer;
