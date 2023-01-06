import { TypesGeocodeMatch } from "@dig-it/library/lib/geocode/_types/TypesGeocodeMatch";
import { TypesGeocodePlace } from "@dig-it/library/lib/geocode/_types/TypesGeocodePlace";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LibraryFunctionsShapesBundlesCyclicLetters } from "@wavesrcool/library/lib/functions/shapes/bundles/cyclic/letters/LibraryFunctionsShapesBundlesCyclicLetters";
import { TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters } from "@wavesrcool/library/lib/functions/shapes/bundles/cyclic/letters/TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters";
import { LibraryReferenceShapesBundlesCyclicBasis } from "@wavesrcool/library/lib/reference/shapes/bundles/cyclic/LibraryReferenceShapesBundlesCyclicBasis";
import { LibraryTypesShapesBundlesCyclic } from "@wavesrcool/library/lib/types/shapes/bundles/cyclic/LibraryTypesShapesBundlesCyclic";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsDigCreateShapeAmount = "fiat" | "btc";

export type TypesShapesWebsDigCreateShapeThread = "root";

export type TypesShapesWebsDigCreateShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsDigCreateShapeThread | "";
  //
  // shape type map WebsDigCreateShape
  //

  visible: boolean;
  disabled: boolean;

  cityBundle: LibraryTypesShapesBundlesCyclic;
  cityResults: TypesGeocodeMatch[] | undefined;
  cityPlace: TypesGeocodePlace | undefined;

  amountBundle: LibraryTypesShapesBundlesCyclic;
  amountType: boolean;
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
    disabled: false,

    cityBundle: LibraryReferenceShapesBundlesCyclicBasis,
    cityResults: undefined,
    cityPlace: undefined,

    amountBundle: LibraryReferenceShapesBundlesCyclicBasis,
    amountType: false,
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

    writeWebsDigCreateShapeDisabled: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.value = {
        ...state.value,
        disabled: action.payload,
      };
    },

    writeWebsDigCreateShapeCityBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const f: TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters = {
        bundle: state.value.cityBundle,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const cityBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        cityBundle,
      };
    },

    writeWebsDigCreateShapeCityResults: (
      state,
      action: PayloadAction<TypesGeocodeMatch[] | undefined>
    ) => {
      state.value = {
        ...state.value,
        cityResults: action.payload,
      };
    },

    writeWebsDigCreateShapeCityPlace: (
      state,
      action: PayloadAction<TypesGeocodePlace | undefined>
    ) => {
      state.value = {
        ...state.value,
        cityPlace: action.payload,
      };
    },

    writeWebsDigCreateShapeAmountBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const filteredValue = action.payload.replace(/[^\d.]/g, ``);

      const f: TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters = {
        bundle: state.value.amountBundle,
        letters: filteredValue,
        pass: filteredValue.length > 1,
      };
      const amountBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        amountBundle,
      };
    },

    writeWebsDigCreateShapeAmountTypeToggle: (state) => {
      state.value = {
        ...state.value,
        amountType: !state.value.amountType,
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
  writeWebsDigCreateShapeDisabled,
  writeWebsDigCreateShapeCityBundle,
  writeWebsDigCreateShapeCityResults,
  writeWebsDigCreateShapeCityPlace,

  writeWebsDigCreateShapeAmountBundle,
  writeWebsDigCreateShapeAmountTypeToggle,
} = WebsDigCreateShapeSlice.actions;

export const ofWebsDigCreateShape = (
  state: TypesWebsShape
): TypesShapesWebsDigCreateShapeValue => state.WebsDigCreateShape.value;
export default WebsDigCreateShapeSlice.reducer;
