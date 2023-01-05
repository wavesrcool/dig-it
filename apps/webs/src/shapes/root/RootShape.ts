import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypesWebsShape } from "@webs-shapes/store";
import { TypesWebsBasisKeyOps } from "@webs-types/key/TypesWebsBasisKeyOps";

export type TypesShapesRootShapeThread = "root";

export type TypesShapesRootShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesRootShapeThread | "";
  //
  // shape type map RootShape
  //

  basiskey: TypesWebsBasisKeyOps;
};

export type TypesShapesRootShape = {
  value: TypesShapesRootShapeValue;
};

const initialState: TypesShapesRootShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial RootShape
    //
    basiskey: "root",
  },
};

export const RootShapeSlice = createSlice({
  name: "RootShape",
  initialState,
  reducers: {
    initRootShape: (state) => {
      state.value = initialState.value;
    },

    writeRootShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeRootShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeRootShapeInverseTrue: (
      state,
      action: PayloadAction<TypesShapesRootShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeRootShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions RootShape
    //

    writeRootShapeBasisKey: (
      state,
      action: PayloadAction<TypesWebsBasisKeyOps>
    ) => {
      state.value = {
        ...state.value,
        basiskey: action.payload,
      };
    },
  },
});

export const {
  initRootShape,
  writeRootShapeEntracteTrue,
  writeRootShapeEntracteFalse,
  writeRootShapeInverseTrue,
  writeRootShapeInverseFalse,
  //
  // shape library RootShape
  //
  writeRootShapeBasisKey,
} = RootShapeSlice.actions;

export const ofRootShape = (state: TypesWebsShape): TypesShapesRootShapeValue =>
  state.RootShape.value;
export default RootShapeSlice.reducer;
