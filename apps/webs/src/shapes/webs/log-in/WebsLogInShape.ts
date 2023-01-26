import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LibraryShapesBundlesLetters } from "@wavesrcool/library/lib/shapes/bundles/letters/LibraryShapesBundlesLetters";
import { ReferenceShapesBundlesBasis } from "@wavesrcool/library/lib/shapes/bundles/_ref";
import { TypesShapesBundles } from "@wavesrcool/library/lib/shapes/bundles/_types/";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsLogInShapeView = "open" | "confirm";

export type TypesShapesWebsLogInShapeThread = "root";

export type TypesShapesWebsLogInShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsLogInShapeThread | "";
  //
  // shape type map WebsLogInShape
  //
  visible: boolean;
  view: TypesShapesWebsLogInShapeView;

  bundlesEmail: TypesShapesBundles;
};

export type TypesShapesWebsLogInShape = {
  value: TypesShapesWebsLogInShapeValue;
};

const initialState: TypesShapesWebsLogInShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial WebsLogInShape
    //
    visible: false,
    view: "open",

    bundlesEmail: ReferenceShapesBundlesBasis,
  },
};

export const WebsLogInShapeSlice = createSlice({
  name: "WebsLogInShape",
  initialState,
  reducers: {
    initWebsLogInShape: (state) => {
      state.value = initialState.value;
    },

    writeWebsLogInShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeWebsLogInShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeWebsLogInShapeInverseTrue: (
      state,
      action: PayloadAction<TypesShapesWebsLogInShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeWebsLogInShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions WebsLogInShape
    //

    writeWebsLogInShapeVisible: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        visible: action.payload,
      };
    },

    writeWebsLogInShapeView: (
      state,
      action: PayloadAction<TypesShapesWebsLogInShapeView>
    ) => {
      state.value = {
        ...state.value,
        view: action.payload,
      };
    },

    writeWebsDigCreateShapePasscodeBundle: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      const f = {
        bundle: state.value.bundlesEmail,
        letters: payload,
        pass: payload.length === 6,
      };
      const bundlesEmail = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        bundlesEmail,
      };
    },
  },
});

export const {
  initWebsLogInShape,
  writeWebsLogInShapeEntracteTrue,
  writeWebsLogInShapeEntracteFalse,
  writeWebsLogInShapeInverseTrue,
  writeWebsLogInShapeInverseFalse,
  //
  // shape library WebsLogInShape
  //
  writeWebsLogInShapeVisible,
  writeWebsLogInShapeView,
} = WebsLogInShapeSlice.actions;

export const ofWebsLogInShape = (
  state: TypesWebsShape
): TypesShapesWebsLogInShapeValue => state.WebsLogInShape.value;
export default WebsLogInShapeSlice.reducer;
