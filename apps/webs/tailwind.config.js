/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const twcRelBase = {
  80: "20rem",
  88: "22rem",
  96: "24rem",
  104: "26rem",
  112: "28rem",
  116: "29rem",
  120: "30rem",
  124: "31rem",
  128: "32rem",
  132: "33rem",
  136: "34rem",
  144: "36rem",
  152: "38rem",
  160: "40rem",
  168: "42rem",
  176: "44rem",
  180: "45rem",
  184: "46rem",
  192: "48rem",
  200: "50rem",
  208: "52rem",
  216: "54rem",
  224: "56rem",
  232: "58rem",
  240: "60rem",
  360: "90rem"
};

const dt = require("tailwindcss/defaultTheme");
const Color = require("color");
const hsl = require("hsl-to-hex");

const alpha = (clr, val) => Color(clr).alpha(val).hsl().string();
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const twclrs = {
  raspberry: {
    main: hsl(330, 65, 50),
  },
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./public/**/*"],
  theme: {
    fontFamily: {
      sans: [...dt.fontFamily.sans],
      serif: [...dt.fontFamily.serif],
      mono: [...dt.fontFamily.mono],
    },
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2280px",
      },
      height: {
        ...twcRelBase,
      },
      minHeight: {
        ...twcRelBase,
      },
      width: {
        ...twcRelBase,
      },
      minWidth: {
        ...twcRelBase,
      },
      padding: {
        ...twcRelBase,
      },
      margin: {
        ...twcRelBase,
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      ringWidth: {
        6: "6px",
      },
      colors: {
        dig_it: {
          raspberry: {
            DEFAULT: twclrs.raspberry.main,
            lighter: lighten(twclrs.raspberry.main, 0.1),
            darker: darken(twclrs.raspberry.main, 0.1),
            75: alpha(twclrs.raspberry.main, 0.75),
          },
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: [
      "light",
      "dark",
      // "cupcake",
      // "bumblebee",
      // "emerald",
      // "corporate",
      // "synthwave",
      // "retro",
      // "cyberpunk",
      // "valentine",
      // "halloween",
      // "garden",
      // "forest",
      // "aqua",
      // "lofi",
      // "pastel",
      // "fantasy",
      // "wireframe",
      // "black",
      // "luxury",
      // "dracula",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
