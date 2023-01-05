import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsDrawerShapeThread = "root";

export type TypesShapesWebsDrawerShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsDrawerShapeThread | "";
  //
  // shape type map WebsDrawerShape
  //

  visible: boolean;
};

export type TypesShapesWebsDrawerShape = {
  value: TypesShapesWebsDrawerShapeValue;
};

const initialState: TypesShapesWebsDrawerShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial WebsDrawerShape
    //

    visible: false,
  },
};

export const WebsDrawerShapeSlice = createSlice({
  name: "WebsDrawerShape",
  initialState,
  reducers: {
    initWebsDrawerShape: (state) => {
      state.value = initialState.value;
    },

    writeWebsDrawerShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeWebsDrawerShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeWebsDrawerShapeInverseTrue: (
      state,
      action: PayloadAction<TypesShapesWebsDrawerShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeWebsDrawerShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions WebsDrawerShape
    //

    writeWebsDrawerShapeVisibleToggle: (state) => {
      state.value = {
        ...state.value,
        visible: !state.value.visible,
      };
    },
  },
});

export const {
  initWebsDrawerShape,
  writeWebsDrawerShapeEntracteTrue,
  writeWebsDrawerShapeEntracteFalse,
  writeWebsDrawerShapeInverseTrue,
  writeWebsDrawerShapeInverseFalse,
  //
  // shape library WebsDrawerShape
  //
  writeWebsDrawerShapeVisibleToggle,
} = WebsDrawerShapeSlice.actions;

export const ofWebsDrawerShape = (
  state: TypesWebsShape
): TypesShapesWebsDrawerShapeValue => state.WebsDrawerShape.value;
export default WebsDrawerShapeSlice.reducer;
