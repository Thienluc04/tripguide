import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#141416",
        black00: "#000",
        black29: "#222529",
        black44: "#3B3E44",
        black2F: "#23262F",
        black32: "#282832",
        black45: "#353945",
        black33: "#333",
        black25: "#252525",
        black4F: "#4F4F4F",
        black52: "#3D4852",
        black20: "#000720",
        black54: "#4A4E54",
        black4B: "#42464B",
        black1B: "#18191B",
        blackA52: "#474A52",
        gray: "#8E94A3",
        gray8B: "#84878B",
        grayF3: "#E7ECF3",
        grayC3: "#B1B5C3",
        grayF7: "#FFFAF7",
        grayF6: "#F4F5F6",
        gray90: "#777E90",
        grayEC: "#E6E8EC",
        grayFD: "#FCFCFD",
        gray9A: "#92929A",
        grayB90: "#868B90",
        grayC4: "#B1B5C4",
        gray5F7: "#F4F5F7",
        grayFB: "#FBFBFB",
        grayEA: "#EAEAEA",
        grayE6: "#E6E6E6",
        grayEE: "#EEE",
        grayAFB: "#FAFAFB",
        grayF4: "#F1F2F4",
        grayEF: "#F0EFEF",
        gray4F6: "#F4F4F6",
        grayE8: "#E8E8E8",
        gray6F: "#65676F",
        grayF2: "#F2F2F2",
        gray91: "#919191",
        grayE1: "#DEDFE1",
        grayA7: "#8897A7",
        grayFE: "#FEFEFE",
        grayE4: "#E4E4E4",
        primary: "#316BFF",
        red: "#FF543D",
        red57: "#EB5757",
        orange: "#FFAF4E",
        orange04: "#FD9704",
        orange54: "#FA8F54",
        blueEA: "#E7E8EA",
        blueA7: "#0B3BA7",
        blueE6: "#145CE6",
        blueFD: "#CED9FD",
        blueFE: "#3B71FE",
        blueFF: "#878CFF",
        blue53: "#243B53",
        green: "#38B245",
        green82: "#03A782",
        greenA6: "#BDDBA6",
        green53: "#219653",
        green1A: "#27AE601A",
        green71: "#50A371",
        green7D: "#58C27D",
      },
      fontFamily: {
        DmSans: "DM Sans",
        OpenSans: "Open Sans",
        Poppins: "Poppins",
        Roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
export default config;
