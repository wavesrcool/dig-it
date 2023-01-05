import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsDigCreateShapeThread = "root";

export type TypesShapesWebsDigCreateShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsDigCreateShapeThread | "";
  //
  // shape type map WebsDigCreateShape
  //

  visible: boolean;
};

export type TypesShapesWebsDigCreateShape = {
  value: TypesShapesWebsDigCreateShapeValue;
};

const initialState: TypesShapesWebsDigCreateShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial WebsDigCreateShape
    //

    visible: false,
  },
};

export const WebsDigCreateShapeSlice = createSlice({
  name: "WebsDigCreateShape",
  initialState,
  reducers: {
    initWebsDigCreateShape: (state) => {
      state.value = initialState.value;
    },

    writeWebsDigCreateShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeWebsDigCreateShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeWebsDigCreateShapeInverseTrue: (
      state,
      action: PayloadAction<TypesShapesWebsDigCreateShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeWebsDigCreateShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions WebsDigCreateShape
    //

    writeWebsDigCreateShapeVisible: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        visible: action.payload,
      };
    },
  },
});

export const {
  initWebsDigCreateShape,
  writeWebsDigCreateShapeEntracteTrue,
  writeWebsDigCreateShapeEntracteFalse,
  writeWebsDigCreateShapeInverseTrue,
  writeWebsDigCreateShapeInverseFalse,
  //
  // shape library WebsDigCreateShape
  //

  writeWebsDigCreateShapeVisible,
} = WebsDigCreateShapeSlice.actions;

export const ofWebsDigCreateShape = (
  state: TypesWebsShape
): TypesShapesWebsDigCreateShapeValue => state.WebsDigCreateShape.value;
export default WebsDigCreateShapeSlice.reducer;
