import { transparentize } from 'polished';

// margin and padding
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

const theme = {
  name: 'StyledSystemDefault', // required for 'storybook-addon-emotion-theme' withThemesProvider
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontWeights: [400, 500, 700],
  space,
  radii: space,
  sizes: space,
  colors: {
    transparent: 'transparent',
    greens: {
      soft: '#5bc971',
    },
    red: '#ff0100',
    grey: '#979797',
    greys: {
      pale: '#eeeff1',
      10: transparentize(0.9, '#979797'),
      50: transparentize(0.5, '#979797'),
    },
    dark: '#1a1b26',
    darks: {
      20: transparentize(0.8, '#1a1b26'),
    },
    black: '#121212',
    blacks: {
      10: transparentize(0.9, '#121212'),
      50: transparentize(0.5, '#121212'),
      80: transparentize(0.2, '#121212'),
    },
    brightTeal: '#00f7bf',
    brightTeals: {
      10: transparentize(0.9, '#00f7bf'),
    },
    white: '#ffffff',
    whites: {
      10: transparentize(0.9, '#ffffff'),
      50: transparentize(0.6, '#ffffff'),
      80: transparentize(0.2, '#ffffff'),
    },
    pinks: {
      hot: '#fc0082',
      barbie: '#fd309a',
      light: '#ffe3f2',
    },
    blues: {
      bright: '#007aff',
      veryDark: '#212330',
      veryDarks: {
        60: transparentize(0.4, '#212330'),
      },
      purply: '#6c13dd',
      deepSky: '#0079ff',
      veryLight: transparentize(0.9, '#0079ff'),
      green: '#1195a6',
    },
    yellows: {
      eggShell: '#fff3bf',
    },
    shop: {
      background: {
        primary: '#212330',
        secondary: '#272933',
      },
      typo: {
        primary: '#ffffff',
        secondary: 'rgba(255,255,255,0.6)',
      },
    },
  },
  shadows: {
    mediumBottom: '0 20px 24px -18px rgba(0, 0, 0, 0.31)',
    mediumTop: '0px -20px 24px -18px rgba(0,0,0,0.31)',
  },
  fonts: {
    regular: 'Roboto-regular',
    medium: 'Roboto-medium',
    bold: 'Roboto-bold',
  },
};

// Shop light theme
// shop: {
//   background: {
//     primary: '#ffffff',
//     secondary: '#eeeff1',
//   },
//   typo: {
//     primary: '#121212',
//     'primary.50': 'rgba(18,18,18,0.6)',
//   },
// }

export default theme;

export type Theme = typeof theme;
