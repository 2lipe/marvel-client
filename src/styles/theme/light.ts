export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },

  border: {
    radius: '0.4rem',
    radius10: '1.0rem',
  },

  font: {
    family:
      " -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,

    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },

  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',

    mainBg: '#06092B',
    lightBg: '#F2F2F2',

    white: '#FAFAFA',
    smooth: '#f4ede8',
    black: '#030517',
    gray: '#8F8F8F',

    gray1: '#EAEAEA',
    gray2: '#999591',
    gray3: '#666360',
    gray4: '#3E3B47',
    gray5: '#2E2F42',
    gray6: '#312E38',
    gray7: '#232129',

    orange: '#ff9000',

    redlight: '#FF6347',
    red: '#c53030',
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '3.6rem',
    xxlarge: '4.8rem',
    xxxlarge: '5.6rem',
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
