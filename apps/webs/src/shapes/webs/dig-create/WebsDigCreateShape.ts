import { TypesGeocodeMatch } from "@dig-it/library/lib/geocode/_types/TypesGeocodeMatch";
import { TypesGeocodePlace } from "@dig-it/library/lib/geocode/_types/TypesGeocodePlace";
import { LibraryRegExpEmail } from "@dig-it/library/lib/regexp/email/LibraryRegExpEmail";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LibraryFunctionsShapesBundlesCyclicLetters } from "@wavesrcool/library/lib/functions/shapes/bundles/cyclic/letters/LibraryFunctionsShapesBundlesCyclicLetters";
import { LibraryReferenceShapesBundlesCyclicBasis } from "@wavesrcool/library/lib/reference/shapes/bundles/cyclic/LibraryReferenceShapesBundlesCyclicBasis";
import { LibraryTypesShapesBundlesCyclic } from "@wavesrcool/library/lib/types/shapes/bundles/cyclic/LibraryTypesShapesBundlesCyclic";
import { TypesWebsShape } from "@webs-shapes/store";

export type TypesShapesWebsDigCreateShapeView =
  | "create"
  | "confirm"
  | "complete";

export type TypesShapesWebsDigCreateShapeAmountType = "fiat" | "btc";

export type TypesShapesWebsDigCreateShapeThread =
  | `Please enter a 6 digit pass code`
  | `Please enter a valid email address`
  | `Please enter an email address where you can be contacted`
  | `Please enter the neighborhood you are located in`
  | "Please enter an amount you are willing to pay"
  | "Please enter the city where you live"
  | "root";

export type TypesShapesWebsDigCreateShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesWebsDigCreateShapeThread | "";
  //
  // shape type map WebsDigCreateShape
  //

  visible: boolean;
  disabled: boolean;
  view: TypesShapesWebsDigCreateShapeView;

  loadingCity: boolean;
  cityBundle: LibraryTypesShapesBundlesCyclic;
  cityResults: TypesGeocodeMatch[] | undefined;
  cityPlace: TypesGeocodePlace | undefined;

  amountBundle: LibraryTypesShapesBundlesCyclic;
  amountType: TypesShapesWebsDigCreateShapeAmountType;

  nbBundle: LibraryTypesShapesBundlesCyclic;
  descBundle: LibraryTypesShapesBundlesCyclic;

  passcodeBundle: LibraryTypesShapesBundlesCyclic;

  contactBundle: LibraryTypesShapesBundlesCyclic;
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
    view: "create",

    loadingCity: false,
    cityBundle: LibraryReferenceShapesBundlesCyclicBasis,
    cityResults: undefined,
    cityPlace: undefined,

    amountBundle: LibraryReferenceShapesBundlesCyclicBasis,
    amountType: "btc",

    nbBundle: LibraryReferenceShapesBundlesCyclicBasis,
    descBundle: LibraryReferenceShapesBundlesCyclicBasis,
    passcodeBundle: LibraryReferenceShapesBundlesCyclicBasis,
    contactBundle: LibraryReferenceShapesBundlesCyclicBasis,
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

    writeWebsDigCreateShapeLoadingCity: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.value = {
        ...state.value,
        loadingCity: action.payload,
      };
    },

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

    writeWebsDigCreateShapeView: (
      state,
      action: PayloadAction<TypesShapesWebsDigCreateShapeView>
    ) => {
      state.value = {
        ...state.value,
        view: action.payload,
      };
    },

    writeWebsDigCreateShapeCityBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const f = {
        bundle: state.value.cityBundle,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const cityBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
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

      const f = {
        bundle: state.value.amountBundle,
        letters: filteredValue,
        pass: filteredValue.length >= 1,
      };
      const amountBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        amountBundle,
      };
    },

    writeWebsDigCreateShapeAmountType: (
      state,
      action: PayloadAction<TypesShapesWebsDigCreateShapeAmountType>
    ) => {
      state.value = {
        ...state.value,
        amountType: action.payload,
      };
    },

    writeWebsDigCreateShapeNbBundle: (state, action: PayloadAction<string>) => {
      const f = {
        bundle: state.value.cityBundle,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const nbBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        nbBundle,
      };
    },

    writeWebsDigCreateShapeDescBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const f = {
        bundle: state.value.cityBundle,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const descBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        descBundle,
      };
    },

    writeWebsDigCreateShapeContactBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const pass = LibraryRegExpEmail.test(action.payload);
      const f = {
        bundle: state.value.cityBundle,
        letters: action.payload,
        pass,
      };
      const contactBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        contactBundle,
      };
    },

    writeWebsDigCreateShapePasscodeBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const filteredValue = action.payload.replace(/[^\d.]/g, ``);

      const f = {
        bundle: state.value.passcodeBundle,
        letters: filteredValue,
        pass: filteredValue.length === 6,
      };
      const passcodeBundle = LibraryFunctionsShapesBundlesCyclicLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        passcodeBundle,
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

  writeWebsDigCreateShapeLoadingCity,

  writeWebsDigCreateShapeVisible,
  writeWebsDigCreateShapeDisabled,

  writeWebsDigCreateShapeView,
  writeWebsDigCreateShapeCityBundle,
  writeWebsDigCreateShapeCityResults,
  writeWebsDigCreateShapeCityPlace,

  writeWebsDigCreateShapeAmountBundle,
  writeWebsDigCreateShapeAmountType,

  writeWebsDigCreateShapeNbBundle,
  writeWebsDigCreateShapeContactBundle,
  writeWebsDigCreateShapeDescBundle,

  writeWebsDigCreateShapePasscodeBundle,
} = WebsDigCreateShapeSlice.actions;

export const ofWebsDigCreateShape = (
  state: TypesWebsShape
): TypesShapesWebsDigCreateShapeValue => state.WebsDigCreateShape.value;
export default WebsDigCreateShapeSlice.reducer;
