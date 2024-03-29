import { TypesGeocodeMatch } from "@dig-it/library/lib/geocode/_types/TypesGeocodeMatch";
import { TypesGeocodePlace } from "@dig-it/library/lib/geocode/_types/TypesGeocodePlace";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiguresLibraryShapesBundlesLetters } from "@wavesrcool/library/lib/shapes/bundles/letters/FiguresLibraryShapesBundlesLetters";
import { LibraryShapesBundlesLetters } from "@wavesrcool/library/lib/shapes/bundles/letters/LibraryShapesBundlesLetters";
import { ReferenceShapesBundlesBasis } from "@wavesrcool/library/lib/shapes/bundles/_ref";
import { TypesShapesBundles } from "@wavesrcool/library/lib/shapes/bundles/_types/";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsSearchShapeThread = "root";

export type TypesShapesWebsSearchShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsSearchShapeThread | "";
  //
  // shape type map WebsSearchShape
  //

  disabled: boolean;
  results: TypesGeocodeMatch[] | undefined;

  searchedPlace: TypesGeocodePlace | undefined;
  searchedBundle: TypesShapesBundles;
};

export type TypesShapesWebsSearchShape = {
  value: TypesShapesWebsSearchShapeValue;
};

const initialState: TypesShapesWebsSearchShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial WebsSearchShape
    //

    disabled: false,
    results: undefined,
    searchedPlace: undefined,
    searchedBundle: ReferenceShapesBundlesBasis,
  },
};

export const WebsSearchShapeSlice = createSlice({
  name: "WebsSearchShape",
  initialState,
  reducers: {
    initWebsSearchShape: (state) => {
      state.value = initialState.value;
    },

    writeWebsSearchShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeWebsSearchShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeWebsSearchShapeInverseTrue: (
      state,
      action: PayloadAction<TypesShapesWebsSearchShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeWebsSearchShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions WebsSearchShape
    //

    writeWebsSearchShapeDisabled: (state, action: PayloadAction<boolean>) => {
      state.value = {
        ...state.value,
        disabled: action.payload,
      };
    },

    writeWebsSearchShapeResults: (
      state,
      action: PayloadAction<TypesGeocodeMatch[] | undefined>
    ) => {
      state.value = {
        ...state.value,
        results: action.payload,
      };
    },

    writeWebsSearchShapeSearchedBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const f: FiguresLibraryShapesBundlesLetters = {
        bundle: state.value.searchedBundle,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const searchedBundle = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        searchedBundle,
      };
    },

    writeWebsSearchShapeSearchedPlace: (
      state,
      action: PayloadAction<TypesGeocodePlace | undefined>
    ) => {
      state.value = {
        ...state.value,
        searchedPlace: action.payload,
      };
    },
  },
});

export const {
  initWebsSearchShape,
  writeWebsSearchShapeEntracteTrue,
  writeWebsSearchShapeEntracteFalse,
  writeWebsSearchShapeInverseTrue,
  writeWebsSearchShapeInverseFalse,
  //
  // shape library WebsSearchShape
  //

  writeWebsSearchShapeDisabled,
  writeWebsSearchShapeResults,
  writeWebsSearchShapeSearchedBundle,
  writeWebsSearchShapeSearchedPlace,
} = WebsSearchShapeSlice.actions;

export const ofWebsSearchShape = (
  state: TypesWebsShape
): TypesShapesWebsSearchShapeValue => state.WebsSearchShape.value;
export default WebsSearchShapeSlice.reducer;
