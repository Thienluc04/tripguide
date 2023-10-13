import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#141416',
        black29: '#222529',
        black44: '#3B3E44',
        black2F: '#23262F',
        black32: '#282832',
        black45: '#353945',
        black90: '#777E90',
        gray: '#8E94A3',
        gray8B: '#84878B',
        grayF3: '#E7ECF3',
        grayC3: '#B1B5C3',
        grayF7: '#FFFAF7',
        grayF6: '#F4F5F6',
        gray90: '#777E90',
        grayEC: '#E6E8EC',
        grayFD: '#FCFCFD',
        gray9A: '#92929A',
        grayB90: '#868B90',
        grayC4: '#B1B5C4',
        primary: '#316BFF',
        red: '#FF543D',
        orange: '#FFAF4E',
      },
      fontFamily: {
        DmSans: 'DM Sans',
        OpenSans: 'Open Sans',
        Poppins: 'Poppins',
        Roboto: 'Roboto',
      },
    },
  },
  plugins: [],
};
export default config;
