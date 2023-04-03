import { alpha } from '@mui/material/styles';

const SCROLL_HEIGHT = {
  timeline: 300,
}

const GREY = {
  0: '#FFFFFF',
  100: '#231F200D',
  200: '#D5D5D580',
  300: '#D5D5D5',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#231f20',
  light: '#231f20',
  main: '#E1CDC0',
  dark: '#231f20',
  darker: '#0D0C22',
  contrastText: '#fff',
  lightgreen:"#80D99F",
};

const SECONDARY = {
  lighter: '#FEFDFB',
  light: '#E1CDC0',
  main: '#FAF5EE',
  dark: '#C1A59A',
  darker: '#091A7A',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#80D99F',
  main: '#54D62C',
  border: "#7ED99F",
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FF7C7C',
  light: '#FF615F',
  main: '#F04040',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const palette = {
  scrollHeight: SCROLL_HEIGHT,
  common: { black: '#000', white: '#fff' },
  placeholder: '#231F2080',
  borderColor: '#221F2080',
  borderColorAlpha: '#221F20',
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
