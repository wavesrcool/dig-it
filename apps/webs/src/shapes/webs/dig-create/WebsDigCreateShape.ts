import { TypesGeocodeMatch } from "@dig-it/library/lib/geocode/_types/TypesGeocodeMatch";
import { TypesGeocodePlace } from "@dig-it/library/lib/geocode/_types/TypesGeocodePlace";
import { LibraryRegExpEmail } from "@dig-it/library/lib/regexp/email/LibraryRegExpEmail";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LibraryShapesBundlesLetters } from "@wavesrcool/library/lib/shapes/bundles/letters/LibraryShapesBundlesLetters";
import { ReferenceShapesBundlesBasis } from "@wavesrcool/library/lib/shapes/bundles/_ref";
import { TypesShapesBundles } from "@wavesrcool/library/lib/shapes/bundles/_types//";
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
  bundlesCity: TypesShapesBundles;
  cityResults: TypesGeocodeMatch[] | undefined;
  cityPlace: TypesGeocodePlace | undefined;

  bundlesAmount: TypesShapesBundles;
  amountType: TypesShapesWebsDigCreateShapeAmountType;

  bundlesNeighb: TypesShapesBundles;
  bundlesDesc: TypesShapesBundles;

  bundlesPasscode: TypesShapesBundles;

  bundlesContact: TypesShapesBundles;
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
    bundlesCity: ReferenceShapesBundlesBasis,
    cityResults: undefined,
    cityPlace: undefined,

    bundlesAmount: ReferenceShapesBundlesBasis,
    amountType: "btc",

    bundlesNeighb: ReferenceShapesBundlesBasis,
    bundlesDesc: ReferenceShapesBundlesBasis,
    bundlesPasscode: ReferenceShapesBundlesBasis,
    bundlesContact: ReferenceShapesBundlesBasis,
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
        bundle: state.value.bundlesCity,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const bundlesCity = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        bundlesCity,
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
        bundle: state.value.bundlesAmount,
        letters: filteredValue,
        pass: filteredValue.length >= 1,
      };
      const bundlesAmount = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        bundlesAmount,
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
        bundle: state.value.bundlesCity,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const bundlesNeighb = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        bundlesNeighb,
      };
    },

    writeWebsDigCreateShapeDescBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const f = {
        bundle: state.value.bundlesCity,
        letters: action.payload,
        pass: action.payload.length > 3,
      };
      const bundlesDesc = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        bundlesDesc,
      };
    },

    writeWebsDigCreateShapeContactBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const pass = LibraryRegExpEmail.test(action.payload);
      const f = {
        bundle: state.value.bundlesCity,
        letters: action.payload,
        pass,
      };
      const bundlesContact = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        bundlesContact,
      };
    },

    writeWebsDigCreateShapePasscodeBundle: (
      state,
      action: PayloadAction<string>
    ) => {
      const filteredValue = action.payload.replace(/[^\d.]/g, ``);

      const f = {
        bundle: state.value.bundlesPasscode,
        letters: filteredValue,
        pass: filteredValue.length === 6,
      };
      const bundlesPasscode = LibraryShapesBundlesLetters(f);
      state.value = {
        ...state.value,
        inverse: false,
        bundlesPasscode,
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
